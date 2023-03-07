import { srvGetAllAlliance, srvGetOneAlliance, srvCreateNewAlliance, srvUpdateOneAlliance, srvDeleteOneAlliance } from '../servicios/allianceService.js'

const ctrlGetAllAlliance = async (req, res) => {
    const allAlliance = await srvGetAllAlliance();
    res.status(200).json(allAlliance)
};

const ctrlGetOneAlliance = async (req, res) => {
    const body = req.body;
    const getAlliance = { idAlliance: body.idAlliance }
    const getOneAlliance = await srvGetOneAlliance(getAlliance)

    res.status(200).json(getOneAlliance)
}

const ctrlCreateOneAlliance = async (req, res) => {
    const { body } = req.body;

    if (!body.alliance) {
        res.status(400).end()
        return;
    }

    const newAlliance = { alliance: body.alliance }
    const addedAlliance = await srvCreateNewAlliance(newAlliance)
    res.status(201).json(addedAlliance)
}

const ctrlUpdateOneAlliance = async (req, res) => {
    const body = req.body;

    if (!body.idAlliance || !body.alliance) {
        res.status(400).end()
        return;
    }

    const updAlliance = {
        idAlliance: body.idAlliance,
        alliance: body.alliance
    }
    const idAlliance = await srvUpdateOneAlliance(updAlliance)
    res.status(201).json(idAlliance)
}

const ctrlDeleteOneAlliance = async (req, res) => {
    const body = req.body;

    if (!body.alliance) {
        res.status(400).end()
        return;
    }

    const delAlliance = { idAlliance: body.idAlliance }
    const idAlliance = await srvDeleteOneAlliance(delAlliance)

    res.status(201).json(idAlliance)
}

export { ctrlGetAllAlliance, ctrlGetOneAlliance, ctrlCreateOneAlliance, ctrlUpdateOneAlliance, ctrlDeleteOneAlliance };
// GET = Solicita una representación de un recurso específico
// POST = Agrega un recurso específico
// PUT = Actualiza todas las representaciones de un recurso específico
// DELETE = Borre el recurso específico
// CONNECT = Establece una conexión hacía el servidor identificado por el recurso destino
// OPTIONS = Establece las opciones de comunicación para el recurso destino
// TRACE = Realiza una prueba de bublé invertido de emnsajes a lo largo de la ruta de acceso al recurso destino
// PATCH = Aplica modificaciones parciales a un recurso