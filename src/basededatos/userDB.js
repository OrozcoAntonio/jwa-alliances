import execSQL from './execSQL.js'

const dbGetAllUser = () => {
    const query = `SELECT PL.idPlayer, AL.Alliance, PL.jwaPlayer, PL.discordID, PL.pseudonimo
     FROM player PL
     INNER JOIN alliance AL ON AL.idAlliance = PL.idAlliance`;
    const result = execSQL(query)
    return result
}
const dbGetOneUser = (user) => {
    let query
    if (user.idPlayer !== undefined) {
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

const dbInsertUser = (newUser) => {
    const query = `INSERT INTO player 
    (idAlliance, jwaPlayer, discordID, pseudonimo) 
    VALUES 
    (${newUser.idAlliance}, '${newUser.jwaPlayer}', '${newUser.discordID}', '${newUser.pseudonimo}')`;
    const result = execSQL(query)
    return result
}

const dbUpdateUser = (updUser) => {
    const query = `UPDATE player 
    SET 
    idAlliance = '${updUser.idAlliance}', 
    jwaPlayer = '${updUser.jwaPlayer}', 
    discordID = '${updUser.discordID}', 
    pseudonimo = '${updUser.pseudonimo}'  
    WHERE idPlayer = '${updUser.idPlayer}' `;
    const result = execSQL(query)
    return result
}

const dbDeleteUser = (updUser) => {
    const query = `DELETE FROM player WHERE idPlayer = '${updUser.idPlayer}'`;
    const result = execSQL(query)
    return result
}

export { dbGetAllUser, dbInsertUser, dbUpdateUser, dbGetOneUser, dbDeleteUser }