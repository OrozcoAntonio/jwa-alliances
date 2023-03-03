import execSQL from './execSQL.js'

const dbGetAllAlliance = () => {
    const query = `SELECT idAlliance, Alliance FROM alliance `;
    const result = execSQL(query)
    return result
}

const dbGetOneAlliance = (alliance) => {
    let query
    if (alliance.idAlliance !== undefined) {
        query = `SELECT idAlliance, Alliance FROM alliance 
        WHERE idAlliance IN ('${alliance.idAlliance}')`;
    } else {
        query = `SELECT idAlliance, Alliance FROM alliance 
        WHERE Alliance IN ('${alliance.alliance}')`;
    }
    const result = execSQL(query)
    return result
}

const dbInsertAlliance = (newAlliance) => {
    const query = `INSERT INTO alliance 
    (Alliance) VALUES ('${newAlliance.alliance}')`;
    const result = execSQL(query)
    return result
}

const dbUpdateAlliance = (updAlliance) => {
    const query = `UPDATE alliance SET alliance = '${updAlliance.alliance}' WHERE idAlliance = '${updAlliance.idAlliance}' `;
    const result = execSQL(query)
    return result
}

const dbDeleteAlliance = (delAlliance) => {
    const query = `DELETE FROM alliance WHERE idAlliance = '${delAlliance.idAlliance}'`;
    const result = execSQL(query)
    return result
}

export { dbGetAllAlliance, dbInsertAlliance, dbUpdateAlliance, dbGetOneAlliance, dbDeleteAlliance }