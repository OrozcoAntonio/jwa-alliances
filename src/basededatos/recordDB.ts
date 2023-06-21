import { APP_GLOBAL } from '../globals';
import { oneRecordInterface, newRecordInterface, updRecordInterface } from '../interfaces/Record.interface';
import execSQL from '../config/execSQL'

 export const dbGetOneRecord = (oneMission: oneRecordInterface) => {
    let query
    if (oneMission.idMission !== 0) {
        query = `SELECT MIS.idMission, MIS.idAlliance, MIS.type, MIS.missionDescripcion, MIS.missionAlias, ALI.Alliance 
        FROM mission MIS 
        INNER JOIN alliance ALI ON MIS.idAlliance = ALI.idAlliance 
        WHERE MIS.idMission = ${oneMission.idMission}`;
    } else {
        query = `SELECT MIS.idMission, MIS.idAlliance, MIS.type, MIS.missionDescripcion, MIS.missionAlias, ALI.Alliance 
        FROM mission MIS 
        INNER JOIN alliance ALI ON MIS.idAlliance = ALI.idAlliance 
        WHERE ALI.idAlliance = ${oneMission.idMission} 
        AND MIS.missionDescripcion = '${oneMission.missionDescripcion}' `;
    }

    const result = execSQL(query)
    return result
}

export const dbInsertRecord = (newMission: newMissionInterface) => {
    let fecha = new Date().toLocaleString(APP_GLOBAL.APP_DATE, { timeZone: APP_GLOBAL.APP_TZ })
    const query = `INSERT INTO mission 
    (idAlliance, type, missionDescripcion, missionAlias, created, updated) 
    VALUES 
    (${newMission.idAlliance}, '${newMission.type}', '${newMission.missionDescripcion}', '${newMission.missionAlias}', '${fecha}', '${fecha}')`;
    const result = execSQL(query)
    return result
}

export const dbUpdateRecord = (updMission: updMissionInterface) => {
    let fecha = new Date().toLocaleString(APP_GLOBAL.APP_DATE, { timeZone: APP_GLOBAL.APP_TZ })
    const query = `UPDATE mission 
    SET 
    idAlliance = '${updMission.idAlliance}', 
    type = '${updMission.type}', 
    missionDescripcion = '${updMission.missionDescripcion}', 
    missionAlias = '${updMission.missionAlias}',
    updated = '${fecha}'
    WHERE idMission = '${updMission.idMission}' `;
    const result = execSQL(query)
    return result
}

export const dbDeleteRecord = (delMission: oneMissionInterface) => {
    const query = `DELETE FROM mission WHERE idMission = '${delMission.idMission}'`;
    const result = execSQL(query)
    return result
}