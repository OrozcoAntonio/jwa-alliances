"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const config_1 = require("./config");
const globals_1 = require("./globals");
const routes_1 = __importDefault(require("./v1/rutas/routes"));
const app = (0, express_1.default)();
app.removeAllListeners();
app.set('appName', globals_1.APP_GLOBAL.APP_NAME);
app.set('idAlliance', globals_1.APP_GLOBAL.ID_ALLIANCE);
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.use((0, cookie_parser_1.default)());
app.post('/login', (req, res) => {
    // validar credenciales
    const username = req.body.username;
    const password = req.body.password;
    const user = { username: 'usuario', email: 'usuario@example.com' };
    if (username !== 'usuario' || password !== 'password') {
        return res.status(401).json({ message: 'Credenciales incorrectas' });
    }
    // generar token
    const token = jsonwebtoken_1.default.sign({ user }, 'secreto', { expiresIn: '24h' });
    res.cookie('token', token, { httpOnly: true });
    res.json({ message: 'Inicio de sesión correcto' });
});
function authMiddleware(req, res, next) {
    const token = req.cookies.token || '';
    try {
        const decoded = jsonwebtoken_1.default.verify(token, 'secreto');
        req.body.user = decoded;
        next();
    }
    catch (err) {
        return res.status(401).json({ message: 'Token no válido' });
    }
}
app.use(authMiddleware, function (req, res, next) {
    try {
        if (req.is('json')) {
            next();
        }
    }
    catch (erroir) {
        res.status(201).json([{ "status": erroir, "data": { "status": "No JSON Object" } }]);
    }
});
app.use('/api/v1', routes_1.default);
app.listen(config_1.PORT, () => { console.log(`Server en puerto ${config_1.PORT}`); });
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
//# sourceMappingURL=app.js.map