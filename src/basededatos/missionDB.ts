import { APP_GLOBAL } from '../globals';
import { oneMissionInterface, newMissionInterface, updMissionInterface } from '../interfaces/Mission.interface';
import execSQL from '../config/execSQL'

export const dbGetAllMission = () => {
    const query = `SELECT MIS.idMission, MIS.idAlliance, MIS.type, MIS.missionDescripcion, MIS.missionAlias, ALI.Alliance 
    FROM mission MIS 
    INNER JOIN alliance ALI ON MIS.idAlliance = ALI.idAlliance 
    WHERE MIS.IdAlliance = ` + APP_GLOBAL.ID_ALLIANCE;
    const result = execSQL(query)
    return result
}

export const dbGetOneMission = (oneMission: oneMissionInterface) => {
    let query
    if (oneMission.idMission !== 0) {
        query = `SELECT MIS.idMission, MIS.idAlliance, MIS.type, MIS.missionDescripcion, MIS.missionAlias, ALI.Alliance 
        FROM mission MIS 
        INNER JOIN alliance ALI ON MIS.idAlliance = ALI.idAlliance 
        WHERE MIS.idMission = ${oneMission.idMission}` + ` AND ALI.idAlliance = ` + APP_GLOBAL.ID_ALLIANCE;
    } else {
        query = `SELECT MIS.idMission, MIS.idAlliance, MIS.type, MIS.missionDescripcion, MIS.missionAlias, ALI.Alliance 
        FROM mission MIS 
        INNER JOIN alliance ALI ON MIS.idAlliance = ALI.idAlliance 
        WHERE ALI.idAlliance = `+ APP_GLOBAL.ID_ALLIANCE + `  
        AND MIS.missionDescripcion = '${oneMission.missionDescripcion}' `;
    }

    const result = execSQL(query)
    return result
}

export const dbInsertMission = (newMission: newMissionInterface) => {
    let fecha = new Date().toLocaleString(APP_GLOBAL.APP_DATE, { timeZone: APP_GLOBAL.APP_TZ })
    const query = `INSERT INTO mission 
    (idAlliance, type, missionDescripcion, missionAlias, created, updated) 
    VALUES 
    (${newMission.idAlliance}, '${newMission.type}', '${newMission.missionDescripcion}', '${newMission.missionAlias}', '${fecha}', '${fecha}')`;
    const result = execSQL(query)
    return result
}

export const dbUpdateMission = (updMission: updMissionInterface) => {
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

export const dbDeleteMission = (delMission: oneMissionInterface) => {
    const query = `DELETE FROM mission WHERE idMission = '${delMission.idMission}'`;
    const result = execSQL(query)
    return result
}