import { Response, Request } from 'express'
import { srvGetAllUsers, srvGetOneUser, srvCreateNewUser, srvUpdateOneUser, srvDeleteOneUser } from '../servicios/userService'

export const ctrlGetAllUser = async ( req: Request, res: Response) => {
    const allUsers = await srvGetAllUsers();
    res.status(200).json(allUsers)
};

export const ctrlGetOneUser = async (req: Request, res: Response) => {
    const { idPlayer= 0, jwaPlayer = '', idAlliance = 0 } = req.body;
    const getUser = { 
        idPlayer, 
        jwaPlayer, 
        idAlliance 
    }
    const getOneUser = await srvGetOneUser(getUser)
    
    res.status(200).json(getOneUser)
}

export const ctrlCreateOneUser = async (req: Request, res: Response) => {
    const { idPlayer, idAlliance = req.app.get('idAlliance'), jwaPlayer, discordID, pseudonimo, createdAt = Date, updatedAt = Date } = req.body;

    if ( !jwaPlayer || !discordID || !pseudonimo ) {
        res.status(400).end()
        return;
    }

    const newUser = {
        idPlayer,
        idAlliance,
        jwaPlayer,
        discordID,
        pseudonimo,
        createdAt,
        updatedAt
    }
    const addedUser = await srvCreateNewUser(newUser)
    res.status(201).json(addedUser)
}

export const ctrlUpdateOneUser = async (req: Request, res: Response) => {
    const { idPlayer, idAlliance = req.app.get('idAlliance'), jwaPlayer, discordID, pseudonimo } = req.body;

    if ( !jwaPlayer || !discordID || !pseudonimo ) {
        res.status(400).end()
        return;
    }

    const updUser = {
        idPlayer,
        idAlliance,
        jwaPlayer,
        discordID,
        pseudonimo
    }
    const updatedUser = await srvUpdateOneUser(updUser)
    res.status(201).json(updatedUser)
}

export const ctrlDeleteOneUser = async (req: Request, res: Response) => {
    const { idPlayer, idAlliance = req.app.get('idAlliance'), jwaPlayer = '' } = req.body;
    if (!idPlayer) {
        res.status(400).end()
        return;
    }

    const delUser = { idPlayer, idAlliance, jwaPlayer }
    const idUser = await srvDeleteOneUser(delUser)

    res.status(201).json(idUser)
}