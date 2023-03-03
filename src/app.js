console.clear()
import jwt from 'jsonwebtoken'
import express from 'express'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import { PORT } from './config.js'
import { APP_GLOBAL } from './globals.js'
import v1RouterHome from './v1/rutas/routeHomes.js'
import v1RouterUser from './v1/rutas/routes.js'
const app = express()

app.removeAllListeners()
app.set('appName', APP_GLOBAL.APP_NAME)
app.set('idAlliance', APP_GLOBAL.ID_ALLIANCE)

app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())

app.post('/login', (req, res) => {
    // validar credenciales
    const username = req.body.username;
    const password = req.body.password;
    const user = { username: 'usuario', email: 'usuario@example.com' };
    if (username !== 'usuario' || password !== 'password') {
        return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    // generar token
    const token = jwt.sign({ user }, 'secreto', { expiresIn: '24h' });
    res.cookie('token', token, { httpOnly: true });
    res.json({ message: 'Inicio de sesión correcto' });
});

function authMiddleware(req, res, next) {
    const token = req.cookies.token || ''
    try {
        const decoded = jwt.verify(token, 'secreto')
        req.user = decoded.user
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Token no válido' });
    }
}

app.use(authMiddleware, function (req, res, next) {
    if (req.is('json')) {
        next()
    } else {
        res.status(201).json([{ "status": "error", "data": { "status": "No JSON Object" } }])
    }
})

app.use('/api/v1', v1RouterHome)
app.use('/api/v1', v1RouterUser)

app.listen(PORT, () => { console.log(`Server en puerto ${PORT}`) })

// Autenticación
// Como crear un servidor node para despliegues
// después del add regresar la info agregada