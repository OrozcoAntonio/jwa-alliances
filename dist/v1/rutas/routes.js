"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../../controladores/usersController");
const allianceController_1 = require("../../controladores/allianceController");
const router = (0, express_1.Router)();
router
    .get('/user/getAllUsers', usersController_1.ctrlGetAllUser)
    .get("/user", usersController_1.ctrlGetOneUser)
    .post('/user', usersController_1.ctrlCreateOneUser)
    .patch('/user', usersController_1.ctrlUpdateOneUser)
    .delete('/user', usersController_1.ctrlDeleteOneUser)
    .get('/alliance/getAllAlliance', allianceController_1.ctrlGetAllAlliance)
    .get("/alliance", allianceController_1.ctrlGetOneAlliance)
    .post('/alliance', allianceController_1.ctrlCreateOneAlliance)
    .patch('/alliance', allianceController_1.ctrlUpdateOneAlliance)
    .delete('/alliance', allianceController_1.ctrlDeleteOneAlliance);
exports.default = router;
// GET = Solicita una representación de un recurso específico
// POST = Agrega un recurso específico
// PUT = Actualiza todas las representaciones de un recurso específico
// DELETE = Borre el recurso específico
// CONNECT = Establece una conexión hacía el servidor identificado por el recurso destino
// OPTIONS = Establece las opciones de comunicación para el recurso destino
// TRACE = Realiza una prueba de bublé invertido de emnsajes a lo largo de la ruta de acceso al recurso destino
// PATCH = Aplica modificaciones parciales a un recurso
//# sourceMappingURL=routes.js.map