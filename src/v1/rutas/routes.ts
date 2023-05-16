import { Router } from 'express'
import {
    ctrlGetOneUser, ctrlCreateOneUser, ctrlUpdateOneUser, ctrlDeleteOneUser
} from '../../controladores/usersController'
import {
    ctrlGetOneAlliance, ctrlCreateOneAlliance, ctrlUpdateOneAlliance, ctrlDeleteOneAlliance
} from '../../controladores/allianceController'
import {
    ctrlGetOneMission, ctrlCreateOneMission, ctrlUpdateOneMission, ctrlDeleteOneMission
} from '../../controladores/MissionController'
import {
    ctrlGetOneRecord, ctrlGetRecordSemana, ctrlGetRecordAnio, ctrlGetRecordSemanaPlayer, ctrlGetRecordAnioPlayer, ctrlGetRecordSemanaMision, ctrlGetRecordAnioMision, ctrlCreateOneRecord, ctrlUpdateOneRecord, ctrlDeleteOneRecord
} from '../../controladores/recordController'


const router = Router()

router
    //Rutas de Alianzas: Obtener, Crear, Actualizar y borrar una alianza
    .get("/alliance", ctrlGetOneAlliance)
    .post('/alliance', ctrlCreateOneAlliance)
    .patch('/alliance', ctrlUpdateOneAlliance)
    .delete('/alliance', ctrlDeleteOneAlliance)

    //Rutas de usuario: Obtener, Crear, Actualizar y borrar un usuario. Asignacdo a una alianza
    .get("/user", ctrlGetOneUser)
    .post('/user', ctrlCreateOneUser)
    .patch('/user', ctrlUpdateOneUser)
    .delete('/user', ctrlDeleteOneUser)

    //Rutas d emisiones: Obtener, Crear, Actualizar y borrar una mision. Misiones de defensa y exploración con su alias. Dificilmente cmabiarán
    .get("/mission", ctrlGetOneMission)
    .post('/mission', ctrlCreateOneMission)
    .patch('/mission', ctrlUpdateOneMission)
    .delete('/mission', ctrlDeleteOneMission)


    .get("/record", ctrlGetOneRecord)
    .get("/record:semana", ctrlGetRecordSemana)
    .get("/record:anio", ctrlGetRecordAnio)
    .get("/record:anio:semana:idPlayer", ctrlGetRecordSemanaPlayer)
    .get("/record:anio:idPlayer", ctrlGetRecordAnioPlayer)
    .get("/record:anio:semana:idMision", ctrlGetRecordSemanaMision)
    .get("/record:anio:idMission", ctrlGetRecordAnioMision)
    .post('/record', ctrlCreateOneRecord)
    .patch('/record', ctrlUpdateOneRecord)
    .delete('/record', ctrlDeleteOneRecord)

export default router
// GET = Solicita una representación de un recurso específico
// POST = Agrega un recurso específico
// PUT = Actualiza todas las representaciones de un recurso específico
// DELETE = Borre el recurso específico
// CONNECT = Establece una conexión hacía el servidor identificado por el recurso destino
// OPTIONS = Establece las opciones de comunicación para el recurso destino
// TRACE = Realiza una prueba de bublé invertido de emnsajes a lo largo de la ruta de acceso al recurso destino
// PATCH = Aplica modificaciones parciales a un recurso