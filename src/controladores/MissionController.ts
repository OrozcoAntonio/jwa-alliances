import { Response, Request } from 'express'
import { srvGetAllMission, srvGetOneMission, srvCreateNewMission, srvUpdateOneMission, srvDeleteOneMission } from '../servicios/missionService'

export const ctrlGetAllMission = async ( req: Request, res: Response) => {
    const allMissions = await srvGetAllMission();
    res.status(200).json(allMissions)
};

export const ctrlGetOneMission = async (req: Request, res: Response) => {
    const { idMission= 0, idAlliance, type = '', missionDescripcion = '', missionAlias = '' } = req.body;
    const getMission = { idMission, idAlliance, type, missionDescripcion, missionAlias }
    const getOneMission = await srvGetOneMission(getMission)
    
    res.status(200).json(getOneMission)
}

export const ctrlCreateOneMission = async (req: Request, res: Response) => {
    const { idMission, idAlliance, type, missionDescripcion, missionAlias, createdAt = Date, updatedAt = Date } = req.body;

    if ( !type || !missionDescripcion || !missionAlias ) {
        res.status(400).end()
        return;
    }


    const newMission = { idMission, idAlliance, type, missionDescripcion, missionAlias }
    const addedMission = await srvCreateNewMission(newMission)
    res.status(201).json(addedMission)
}

export const ctrlUpdateOneMission = async (req: Request, res: Response) => {
    const { idMission, idAlliance, type, missionDescripcion, missionAlias } = req.body;

    if ( !type || !missionDescripcion || !missionAlias ) {
        res.status(400).end()
        return;
    }

    const updMission = { idMission, idAlliance, type, missionDescripcion, missionAlias }
    const updatedMission = await srvUpdateOneMission(updMission)
    res.status(201).json(updatedMission)
}

export const ctrlDeleteOneMission = async (req: Request, res: Response) => {
    const { idMission = 0, idAlliance, type = '', missionDescripcion = '', missionAlias = '' } = req.body;
    if (!idMission) {
        res.status(400).end()
        return;
    }

    const delMission = { idMission, idAlliance, type, missionDescripcion, missionAlias }
    const delrtnMission = await srvDeleteOneMission(delMission)

    res.status(201).json(delrtnMission)
}