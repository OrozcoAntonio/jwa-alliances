import { Router } from 'express'
import {
    ctrlGetAllUser, ctrlGetOneUser, ctrlCreateOneUser, ctrlUpdateOneUser, ctrlDeleteOneUser
} from '../../controladores/usersController'

import {
    ctrlGetAllAlliance, ctrlGetOneAlliance, ctrlCreateOneAlliance, ctrlUpdateOneAlliance, ctrlDeleteOneAlliance
} from '../../controladores/allianceController'

const router = Router()

router
    .get('/user/getAllUsers', ctrlGetAllUser)
    .get("/user", ctrlGetOneUser)
    .post('/user', ctrlCreateOneUser)
    .patch('/user', ctrlUpdateOneUser)
    .delete('/user', ctrlDeleteOneUser)

    .get('/alliance/getAllAlliance', ctrlGetAllAlliance)
    .get("/alliance", ctrlGetOneAlliance)
    .post('/alliance', ctrlCreateOneAlliance)
    .patch('/alliance', ctrlUpdateOneAlliance)
    .delete('/alliance', ctrlDeleteOneAlliance)

export default router
// GET = Solicita una representación de un recurso específico
// POST = Agrega un recurso específico
// PUT = Actualiza todas las representaciones de un recurso específico
// DELETE = Borre el recurso específico
// CONNECT = Establece una conexión hacía el servidor identificado por el recurso destino
// OPTIONS = Establece las opciones de comunicación para el recurso destino
// TRACE = Realiza una prueba de bublé invertido de emnsajes a lo largo de la ruta de acceso al recurso destino
// PATCH = Aplica modificaciones parciales a un recurso