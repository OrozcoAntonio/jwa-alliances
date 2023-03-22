"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../../controladores/usersController");
const allianceController_1 = require("../../controladores/allianceController");
const MissionController_1 = require("../../controladores/MissionController");
const router = (0, express_1.Router)();
router
    .get('/user/getAllUsers', usersController_1.ctrlGetAllUser)
    .get('/alliance/getAllAlliance', allianceController_1.ctrlGetAllAlliance)
    .get('/mission/getAllMission', MissionController_1.ctrlGetAllMission);
exports.default = router;
// GET = Solicita una representación de un recurso específico
// POST = Agrega un recurso específico
// PUT = Actualiza todas las representaciones de un recurso específico
// DELETE = Borre el recurso específico
// CONNECT = Establece una conexión hacía el servidor identificado por el recurso destino
// OPTIONS = Establece las opciones de comunicación para el recurso destino
// TRACE = Realiza una prueba de bublé invertido de emnsajes a lo largo de la ruta de acceso al recurso destino
// PATCH = Aplica modificaciones parciales a un recurso
//# sourceMappingURL=routesAllQuery.js.map