import { APP_GLOBAL } from '../globals';
import { oneUserInterface, newUserInterface, updUserInterface } from '../interfaces/User.interface';
import execSQL from './execSQL'

const dbGetAllUser = () => {
    const query = `SELECT PL.idPlayer, AL.Alliance, PL.jwaPlayer, PL.discordID, PL.pseudonimo
     FROM player PL
     INNER JOIN alliance AL ON AL.idAlliance = PL.idAlliance`;
    const result = execSQL(query)
    return result
}
const dbGetOneUser = (user: oneUserInterface) => {
    let query
    if (user.idPlayer !== 0) {
        query = `SELECT PL.idPlayer, AL.Alliance, PL.jwaPlayer, PL.discordID, PL.pseudonimo, PL.idAlliance 
        FROM player PL 
        INNER JOIN alliance AL ON AL.idAlliance = PL.idAlliance
        WHERE PL.idPlayer = ${user.idPlayer}`;
    } else {
        query = `SELECT PL.idPlayer, AL.Alliance, PL.jwaPlayer, PL.discordID, PL.pseudonimo, PL.idAlliance 
        FROM player PL 
        INNER JOIN alliance AL ON AL.idAlliance = PL.idAlliance 
        WHERE AL.idAlliance = ${user.idAlliance} 
        AND PL.jwaPlayer = '${user.jwaPlayer}' `;
    }

    const result = execSQL(query)
    return result
}

const dbInsertUser = (newUser: newUserInterface) => {
    let fecha = new Date().toLocaleString(APP_GLOBAL.APP_DATE, { timeZone: APP_GLOBAL.APP_TZ })
    const query = `INSERT INTO player 
    (idAlliance, jwaPlayer, discordID, 
        pseudonimo, created, updated) 
    VALUES 
    (${newUser.idAlliance}, '${newUser.jwaPlayer}', '${newUser.discordID}', 
    '${newUser.pseudonimo}', '${fecha}', '${fecha}')`;
    const result = execSQL(query)
    return result
}

const dbUpdateUser = (updUser: updUserInterface) => {
    let fecha = new Date().toLocaleString(APP_GLOBAL.APP_DATE, { timeZone: APP_GLOBAL.APP_TZ })
    const query = `UPDATE player 
    SET 
    idAlliance = '${updUser.idAlliance}', 
    jwaPlayer = '${updUser.jwaPlayer}', 
    discordID = '${updUser.discordID}', 
    pseudonimo = '${updUser.pseudonimo}',
    updated = '${fecha}'
    WHERE idPlayer = '${updUser.idPlayer}' `;
    const result = execSQL(query)
    return result
}

const dbDeleteUser = (delUser: oneUserInterface) => {
    const query = `DELETE FROM player WHERE idPlayer = '${delUser.idPlayer}'`;
    const result = execSQL(query)
    return result
}

export { dbGetAllUser, dbInsertUser, dbUpdateUser, dbGetOneUser, dbDeleteUser }