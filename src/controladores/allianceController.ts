import { Response, Request } from 'express'
import { srvGetAllAlliance, srvGetOneAlliance, srvCreateNewAlliance, srvUpdateOneAlliance, srvDeleteOneAlliance } from '../servicios/allianceService'

const ctrlGetAllAlliance = async (req: Request, res: Response) => {
    const allAlliance = await srvGetAllAlliance();
    res.status(200).json(allAlliance)
};

const ctrlGetOneAlliance = async (req: Request, res: Response) => {
    const {idAlliance} = req.body;
    const getAlliance = { idAlliance }
    const getOneAlliance = await srvGetOneAlliance(getAlliance)

    res.status(200).json(getOneAlliance)
}

const ctrlCreateOneAlliance = async (req: Request, res: Response) => {
    const { idAlliance, Alliance } = req.body;

    if (!Alliance) {
        res.status(400).end()
        return;
    }

    const newAlliance = { idAlliance, Alliance }
    const addedAlliance = await srvCreateNewAlliance(newAlliance)
    res.status(201).json(addedAlliance)
}

const ctrlUpdateOneAlliance = async (req: Request, res: Response) => {
    const {idAlliance = req.app.get('idAlliance'), Alliance} = req.body;

    if (!idAlliance || !Alliance) {
        res.status(400).end()
        return;
    }

    const updAlliance = {
        idAlliance,
        Alliance
    }
    const getUpdAlliance = await srvUpdateOneAlliance(updAlliance)
    res.status(201).json(getUpdAlliance)
}

const ctrlDeleteOneAlliance = async (req: Request, res: Response) => {
    const { idAlliance } = req.body;

    if (!idAlliance) {
        res.status(400).end()
        return;
    }

    const delAlliance = { idAlliance }
    const getDelAlliance = await srvDeleteOneAlliance(delAlliance)

    res.status(201).json(getDelAlliance)
}

export { ctrlGetAllAlliance, ctrlGetOneAlliance, ctrlCreateOneAlliance, ctrlUpdateOneAlliance, ctrlDeleteOneAlliance };