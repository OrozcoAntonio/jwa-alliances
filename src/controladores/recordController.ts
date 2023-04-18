import { Response, Request } from 'express'
import { srvGetOneRecord, srvUpdateOneRecord } from '../servicios/recordService'

export const ctrlGetOneWeek = async (req: Request, res: Response) => {
    const { idRecord, anio, semana } = req.body;

    if ( !idRecord || !anio || !semana ) {
        res.status(400).end()
        return;
    }

    const getOneWeek = { idRecord, anio, semana }
    const rtnRecord = await srvGetOneRecord(getOneWeek)
    res.status(201).json(rtnRecord)
}

export const ctrlUpdateOneWeek = async (req: Request, res: Response) => {
    const { idRecord, anio, semana, idPlayer, idMission, posicion, rank } = req.body;
 
    if ( !idRecord || !anio || !semana || 
        !idPlayer || !idMission || !posicion || !rank) {
        res.status(400).end()
        return;
    }

    const updRecord = { idRecord, anio, semana, idPlayer, idMission, posicion, rank }
    const getUpdAlliance = await srvUpdateOneRecord(updRecord)
    res.status(201).json(getUpdAlliance)
}
