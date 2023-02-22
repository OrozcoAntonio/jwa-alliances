import {
    srvGetAllUsers,
    srvGetOneUser,
    srvCreateNewUser,
    srvUpdateOneUser,
    srvDeleteOneUser
} from '../servicios/userService.js'

const ctrlGetAllUser = async (req, res) => {
    const allUsers = await srvGetAllUsers();
    res.json([{ "status": "ok", "data": allUsers }])
};

const ctrlGetOneUser = async (req, res) => {
    const body = req.body;

    const getUser = {
        idAlliance: req.app.get('idAlliance'),
        jwaPlayer: body.jwaPlayer
    }
    console.log(getUser)

    res.json([{ "status": "ok", "data": userQuery }])
}

const ctrlCreateOneUser = async (req, res) => {
    const body = req.body;

    if (
        !body.jwaPlayer ||
        !body.discordID ||
        !body.pseudonimo
    ) {
        console.log('Nada que enviar')
        res.status(201).end()
        return;
    }

    const newUser = {
        idAlliance: req.app.get('idAlliance'),
        jwaPlayer: body.jwaPlayer,
        discordID: body.discordID,
        pseudonimo: body.pseudonimo
    }

    const idUser = await srvCreateNewUser(newUser)
    console.log(idUser)
    res.status(201).send(idUser)

    // 200 OK
    // 400 Sin permiso
    // 500  Error server
}

const ctrlUpdateOneUser = (req, res) => {
    const user = srvUpdateOneUser(req.params.idUser)
    res.send(`Update one user ${req.params.idUser}`)
}

const ctrlDeleteOneUser = (req, res) => {
    const user = srvDeleteOneUser(req.params.idUser)
    res.send(`Delete one user ${req.params.idUser}`)
}

const ctrlGetUserRoute = (req, res) => {
    res.send(`Route user ruta usuario`)
}

export { ctrlGetAllUser, ctrlGetOneUser, ctrlGetUserRoute, ctrlCreateOneUser, ctrlUpdateOneUser, ctrlDeleteOneUser };

// GET = Solicita una representación de un recurso específico
// POST = Agrega un recurso específico
// PUT = Actualiza todas las representaciones de un recurso específico
// DELETE = Borre el recurso específico
// CONNECT = Establece una conexión hacía el servidor identificado por el recurso destino
// OPTIONS = Establece las opciones de comunicación para el recurso destino
// TRACE = Realiza una prueba de bublé invertido de emnsajes a lo largo de la ruta de acceso al recurso destino
// PATCH = Aplica modificaciones parciales a un recurso