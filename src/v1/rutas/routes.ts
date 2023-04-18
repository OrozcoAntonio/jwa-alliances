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

const router = Router()

router
    .get("/user", ctrlGetOneUser)
    .post('/user', ctrlCreateOneUser)
    .patch('/user', ctrlUpdateOneUser)
    .delete('/user', ctrlDeleteOneUser)

    .get("/alliance", ctrlGetOneAlliance)
    .post('/alliance', ctrlCreateOneAlliance)
    .patch('/alliance', ctrlUpdateOneAlliance)
    .delete('/alliance', ctrlDeleteOneAlliance)

    .get("/mission", ctrlGetOneMission)
    .post('/mission', ctrlCreateOneMission)
    .patch('/mission', ctrlUpdateOneMission)
    .delete('/mission', ctrlDeleteOneMission)

    .get("/record:NumWeek", ctrlWeek)

export default router
// GET = Solicita una representación de un recurso específico
// POST = Agrega un recurso específico
// PUT = Actualiza todas las representaciones de un recurso específico
// DELETE = Borre el recurso específico
// CONNECT = Establece una conexión hacía el servidor identificado por el recurso destino
// OPTIONS = Establece las opciones de comunicación para el recurso destino
// TRACE = Realiza una prueba de bublé invertido de emnsajes a lo largo de la ruta de acceso al recurso destino
// PATCH = Aplica modificaciones parciales a un recurso