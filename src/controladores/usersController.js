import { srvGetAllUsers, srvGetOneUser, srvCreateNewUser, srvUpdateOneUser, srvDeleteOneUser } from '../servicios/userService.js'

const ctrlGetAllUser = async (req, res) => {
    const allUsers = await srvGetAllUsers();
    res.status(200).json(allUsers)
};

const ctrlGetOneUser = async (req, res) => {
    const body = req.body;
    const getUser = { idPlayer: body.idPlayer, jwaPlayer: body.jwaPlayer, idAlliance: body.idAlliance }
    const getOneUser = await srvGetOneUser(getUser)
    res.status(200).json(getOneUser)
}

const ctrlCreateOneUser = async (req, res) => {
    const body = req.body;

    if (
        !body.jwaPlayer ||
        !body.discordID ||
        !body.pseudonimo
    ) {
        res.status(400).end()
        return;
    }

    const newUser = {
        idAlliance: req.app.get('idAlliance'),
        jwaPlayer: body.jwaPlayer,
        discordID: body.discordID,
        pseudonimo: body.pseudonimo
    }
    const addedUser = await srvCreateNewUser(newUser)
    res.status(201).json(addedUser)
}

const ctrlUpdateOneUser = async (req, res) => {
    const body = req.body;

    if (
        !body.idPlayer ||
        !body.jwaPlayer ||
        !body.discordID ||
        !body.pseudonimo
    ) {
        res.status(400).end()
        return;
    }

    const updUser = {
        idPlayer: body.idPlayer,
        idAlliance: req.app.get('idAlliance'),
        jwaPlayer: body.jwaPlayer,
        discordID: body.discordID,
        pseudonimo: body.pseudonimo
    }
    const updatedUser = await srvUpdateOneUser(updUser)
    res.status(201).json(updatedUser)
}

const ctrlDeleteOneUser = async (req, res) => {
    const body = req.body;

    if (!body.idPlayer) {
        res.status(400).end()
        return;
    }

    const delUser = { idPlayer: body.idPlayer }
    const idUser = await srvDeleteOneUser(delUser)

    res.status(201).json(idUser)
}

export { ctrlGetAllUser, ctrlGetOneUser, ctrlCreateOneUser, ctrlUpdateOneUser, ctrlDeleteOneUser };
// GET = Solicita una representación de un recurso específico
// POST = Agrega un recurso específico
// PUT = Actualiza todas las representaciones de un recurso específico
// DELETE = Borre el recurso específico
// CONNECT = Establece una conexión hacía el servidor identificado por el recurso destino
// OPTIONS = Establece las opciones de comunicación para el recurso destino
// TRACE = Realiza una prueba de bublé invertido de emnsajes a lo largo de la ruta de acceso al recurso destino
// PATCH = Aplica modificaciones parciales a un recurso