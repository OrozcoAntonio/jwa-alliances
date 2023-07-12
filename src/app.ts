import jwt from 'jsonwebtoken';
import express, { Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import { PORT } from './config/config'
import { APP_GLOBAL } from './globals'
import v1Routers from './v1/rutas/routes'
import v1RoutersAllQuery from './v1/rutas/routesAllQuery'
const app = express()

app.removeAllListeners()
app.set('appName', APP_GLOBAL.APP_NAME)
app.set('idAlliance', APP_GLOBAL.ID_ALLIANCE)

app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())

app.post('/login', (req: Request, res: Response) => {
    // validar credenciales
    const username: string = req.body.username;
    const password: string = req.body.password;
    const user: object = { username: 'usuario', email: 'usuario@example.com' };
    if (username !== 'usuario' || password !== 'password') {
        return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    // generar token
    const token = jwt.sign({ user }, 'secreto', { expiresIn: '24h' });
    res.cookie('token', token, { httpOnly: true });
    res.json({ message: 'Inicio de sesión correcto' });
});

function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies.token || ''
    try {
        const decoded = jwt.verify(token, 'secreto')
        req.body.user = decoded
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Token no válido' });
    }
}

//Se crean las consultas a todos los registros para dejar de validar que sea JSON
app.use('/api/v1', v1RoutersAllQuery)

app.use(authMiddleware, function (req: Request, res: Response, next: NextFunction) {
    try {
        if (req.is('json')) {
            next()
        } else {
            res.status(201).json([{ "status": "NoJson", "data": { "status": "No JSON Object" } }])
        }
    } catch (erroir) {
        res.status(201).json([{ "status": erroir, "data": { "status": "No JSON Object" } }])
    }
})

//Se crean las consultas para validar que sea JSON
app.use('/api/v1', v1Routers)

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

function logErrors(err: Error, req: Request, res: Response, next: NextFunction) {
    console.error(err.stack);
    next(err);
}

function clientErrorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    if (req.xhr) {
        res.status(500).send({ error: 'Something failed!' });
    } else {
        next(err);
    }
}

function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500);
    res.render('error', { error: err });
}

app.listen(PORT, () => { console.log(`Server en puerto ${PORT}`) })
// Autenticación
// Como crear un servidor node para despliegues
// después del add regresar la info agregada
// Validar escapar de posible consultas SQL
// sequelize

/* 
Tipo de JS
number
string
boolean
null
undefined
object
function

Tipo TypeScript
any
unknow
never
arrasy
tuplas
Enums
enum Talla {Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl'}
const variable1 = Talla.Grande // variable1 = 'l'

const enum LoadingState {Idle, Loading, Success, Error}
const estado = LoadingState.Idle

Tipos TS inferidos
const objeto = { id: 1, nombre: ''}
objeto.nombre = 'Hola yo'

type Direccion = {
        numero: number,
        calle: string,
        pais: string
    }

const objeto = { id: 1, nombreOpcional?: '', readonly apellido: 'miapellido'}
type NuevoObjeto = {
    readonly valor1: number,
    nombre: string,
    talla: Talla,
    direccion: Direccion
}
const objetito: NuevoObjeto = {
    valor1: 1,
    nombre: 'algo de nombvre',
    talla: Talla.Mediana,
    direccion: {
        numero: 1,
        calle: 'callecita',
        pais: 'paisito'
    }
}
const arr: NuevoObjeto = []
*/