import { Response, Request } from 'express'
import { srvGetOneRecord, srvGetRecordSemana, srvGetRecordAnio, srvGetRecordSemanaPlayer, srvGetRecordAnioPlayer, srvGetRecordSemanaMision, srvGetRecordAnioMision, srvCreateOneRecord, srvUpdateOneRecord, srvDeleteOneRecord } from '../servicios/recordService'

//'idRecord'|'anio'|'semana'|'idPlayer'|'idMission'|'posicion'|'rank'
export const ctrlGetOneRecord = async (req: Request, res: Response) => {
    const { idRecord, anio, semana } = req.body;

    if ( !idRecord || !anio || !semana ) {
        res.status(400).end()
        return;
    }

    const getOneRecord = { idRecord, anio, semana }
    const rtnRecord = await srvGetOneRecord(getOneRecord)
    res.status(201).json(rtnRecord)
}

export const ctrlGetRecordSemana = async (req: Request, res: Response) => {
    const {anio, semana} = req.params;
    if ( !anio || !semana ) {
        res.status(400).end()
        return;
    }

    const getRecord = { anio, semana }
    const rtnRecord = await srvGetRecordSemana( getRecord )
    res.status(201).json(rtnRecord)
}

export const ctrlGetRecordAnio = async (req: Request, res: Response) => {
    const {anio} = req.params;
    if ( !anio ) {
        res.status(400).end()
        return;
    }

    const getRecord = { anio }
    const rtnRecord = await srvGetRecordAnio( getRecord )
    res.status(201).json(rtnRecord)
}

export const ctrlGetRecordSemanaPlayer = async (req: Request, res: Response) => {
    const {anio, semana, idPlayer} = req.params;
    if ( !anio || !semana || !idPlayer ) {
        res.status(400).end()
        return;
    }

    const getRecord = { anio, semana, idPlayer }
    const rtnRecord = await srvGetRecordSemanaPlayer( getRecord )
    res.status(201).json(rtnRecord)
}

export const ctrlGetRecordAnioPlayer = async (req: Request, res: Response) => {
    const {anio, idPlayer} = req.params;
    if ( !anio || !idPlayer ) {
        res.status(400).end()
        return;
    }

    const getRecord = { anio, idPlayer }
    const rtnRecord = await srvGetRecordAnioPlayer( getRecord )
    res.status(201).json(rtnRecord)
}

export const ctrlGetRecordSemanaMision = async (req: Request, res: Response) => {
    const {anio, semana, idMision} = req.params;
    if ( !anio || !semana || !idMision ) {
        res.status(400).end()
        return;
    }

    const getRecord = { anio, semana, idMision }
    const rtnRecord = await srvGetRecordSemanaMision( getRecord )
    res.status(201).json(rtnRecord)
}

export const ctrlGetRecordAnioMision = async (req: Request, res: Response) => {
    const {anio, idMision} = req.params;
    if ( !anio || !idMision ) {
        res.status(400).end()
        return;
    }

    const getRecord = { anio, idMision }
    const rtnRecord = await srvGetRecordAnioMision( getRecord )
    res.status(201).json(rtnRecord)
}

export const ctrlCreateOneRecord = async (req: Request, res: Response) => {
    const { anio, semana, idPlayer, idMission, posicion, rank } = req.body;
    
    if ( !anio || !semana || !idPlayer || !idMission || !posicion || !rank) {
        res.status(400).end()
        return;
    }

    const updRecord = { anio, semana, idPlayer, idMission, posicion, rank }
    const getUpdAlliance = await srvCreateOneRecord(updRecord)
    res.status(201).json(getUpdAlliance)
}

export const ctrlUpdateOneRecord = async (req: Request, res: Response) => {
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

export const ctrlDeleteOneRecord = async (req: Request, res: Response) => {
    const { idRecord, anio, semana, idPlayer, idMission, posicion, rank } = req.body;
    
    if ( !idRecord || !anio || !semana || 
        !idPlayer || !idMission || !posicion || !rank) {
        res.status(400).end()
        return;
    }

    const updRecord = { idRecord, anio, semana, idPlayer, idMission, posicion, rank }
    const getUpdAlliance = await srvDeleteOneRecord(updRecord)
    res.status(201).json(getUpdAlliance)
}