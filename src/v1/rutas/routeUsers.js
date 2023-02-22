import { Router } from 'express'
import {
    ctrlGetAllUser,
    ctrlGetOneUser,
    ctrlGetUserRoute,
    ctrlCreateOneUser,
    ctrlUpdateOneUser,
    ctrlDeleteOneUser
} from '../../controladores/usersController.js'

const router = Router()

router
    .get('/user/getAllUsers', ctrlGetAllUser)
    .get("/user/:idUser", ctrlGetOneUser)
    .get("/user", ctrlGetUserRoute)
    .post('/user/new', ctrlCreateOneUser)
    .patch('/user/:idUser', ctrlUpdateOneUser)
    .delete('/user/:idUser', ctrlDeleteOneUser)

export default router

// GET = Solicita una representación de un recurso específico
// POST = Agrega un recurso específico
// PUT = Actualiza todas las representaciones de un recurso específico
// DELETE = Borre el recurso específico
// CONNECT = Establece una conexión hacía el servidor identificado por el recurso destino
// OPTIONS = Establece las opciones de comunicación para el recurso destino
// TRACE = Realiza una prueba de bublé invertido de emnsajes a lo largo de la ruta de acceso al recurso destino
// PATCH = Aplica modificaciones parciales a un recurso