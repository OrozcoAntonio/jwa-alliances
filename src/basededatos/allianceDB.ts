import { APP_GLOBAL } from '../globals';
import { oneAlliInterface, newAlliInterface, updAlliInterface } from '../interfaces/Alliance.interface';
import execSQL from './execSQL'

const dbGetAllAlliance = () => {
    const query = `SELECT idAlliance, Alliance FROM alliance `;
    const result = execSQL(query)
    return result
}

const dbGetOneAlliance = (alliance: oneAlliInterface) => {
    let query
    if (alliance.idAlliance !== undefined) {
        query = `SELECT idAlliance, Alliance FROM alliance 
        WHERE idAlliance IN ('${alliance.idAlliance}')`;
    } else {
        query = `SELECT idAlliance, Alliance FROM alliance 
        WHERE Alliance IN ('${alliance.idAlliance}')`;
    }
    const result = execSQL(query)
    return result
}

const dbInsertAlliance = (newAlliance: newAlliInterface) => {
    const query = `INSERT INTO alliance 
    (Alliance) VALUES ('${newAlliance.Alliance}')`;
    const result = execSQL(query)
    return result
}

const dbUpdateAlliance = (updAlliance: oneAlliInterface) => {
    const query = `UPDATE alliance SET idAlliance = '${updAlliance.idAlliance}' WHERE idAlliance = '${updAlliance.idAlliance}' `;
    const result = execSQL(query)
    return result
}

const dbDeleteAlliance = (delAlliance: oneAlliInterface) => {
    const query = `DELETE FROM alliance WHERE idAlliance = '${delAlliance.idAlliance}'`;
    const result = execSQL(query)
    return result
}

export { dbGetAllAlliance, dbInsertAlliance, dbUpdateAlliance, dbGetOneAlliance, dbDeleteAlliance }