"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../../controladores/usersController");
const allianceController_1 = require("../../controladores/allianceController");
const MissionController_1 = require("../../controladores/MissionController");
const recordController_1 = require("../../controladores/recordController");
const router = (0, express_1.Router)();
router
    //Rutas de Alianzas: Obtener, Crear, Actualizar y borrar una alianza
    .get("/alliance", allianceController_1.ctrlGetOneAlliance)
    .post('/alliance', allianceController_1.ctrlCreateOneAlliance)
    .patch('/alliance', allianceController_1.ctrlUpdateOneAlliance)
    .delete('/alliance', allianceController_1.ctrlDeleteOneAlliance)
    //Rutas de usuario: Obtener, Crear, Actualizar y borrar un usuario. Asignacdo a una alianza
    .get("/user", usersController_1.ctrlGetOneUser)
    .post('/user', usersController_1.ctrlCreateOneUser)
    .patch('/user', usersController_1.ctrlUpdateOneUser)
    .delete('/user', usersController_1.ctrlDeleteOneUser)
    //Rutas d emisiones: Obtener, Crear, Actualizar y borrar una mision. Misiones de defensa y exploración con su alias. Dificilmente cmabiarán
    .get("/mission", MissionController_1.ctrlGetOneMission)
    .post('/mission', MissionController_1.ctrlCreateOneMission)
    .patch('/mission', MissionController_1.ctrlUpdateOneMission)
    .delete('/mission', MissionController_1.ctrlDeleteOneMission)
    .get("/record", recordController_1.ctrlGetOneRecord)
    .get("/record:semana", recordController_1.ctrlGetRecordSemana)
    .get("/record:anio", recordController_1.ctrlGetRecordAnio)
    .get("/record:anio:semana:idPlayer", recordController_1.ctrlGetRecordSemanaPlayer)
    .get("/record:anio:idPlayer", recordController_1.ctrlGetRecordAnioPlayer)
    .get("/record:anio:semana:idMision", recordController_1.ctrlGetRecordSemanaMision)
    .get("/record:anio:idMission", recordController_1.ctrlGetRecordAnioMision)
    .post('/record', recordController_1.ctrlCreateOneRecord)
    .patch('/record', recordController_1.ctrlUpdateOneRecord)
    .delete('/record', recordController_1.ctrlDeleteOneRecord);
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