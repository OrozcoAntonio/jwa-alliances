"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbDeleteMission = exports.dbUpdateMission = exports.dbInsertMission = exports.dbGetOneMission = exports.dbGetAllMission = void 0;
const globals_1 = require("../globals");
const execSQL_1 = __importDefault(require("../config/execSQL"));
const dbGetAllMission = () => {
    const query = `SELECT MIS.idMission, MIS.idAlliance, MIS.type, MIS.missionDescripcion, MIS.missionAlias, ALI.Alliance 
    FROM mission MIS 
    INNER JOIN alliance ALI ON MIS.idAlliance = ALI.idAlliance 
    WHERE MIS.IdAlliance = ` + globals_1.APP_GLOBAL.ID_ALLIANCE;
    const result = (0, execSQL_1.default)(query);
    return result;
};
exports.dbGetAllMission = dbGetAllMission;
const dbGetOneMission = (oneMission) => {
    let query;
    if (oneMission.idMission !== 0) {
        query = `SELECT MIS.idMission, MIS.idAlliance, MIS.type, MIS.missionDescripcion, MIS.missionAlias, ALI.Alliance 
        FROM mission MIS 
        INNER JOIN alliance ALI ON MIS.idAlliance = ALI.idAlliance 
        WHERE MIS.idMission = ${oneMission.idMission}` + ` AND ALI.idAlliance = ` + globals_1.APP_GLOBAL.ID_ALLIANCE;
    }
    else {
        query = `SELECT MIS.idMission, MIS.idAlliance, MIS.type, MIS.missionDescripcion, MIS.missionAlias, ALI.Alliance 
        FROM mission MIS 
        INNER JOIN alliance ALI ON MIS.idAlliance = ALI.idAlliance 
        WHERE ALI.idAlliance = ` + globals_1.APP_GLOBAL.ID_ALLIANCE + `  
        AND MIS.missionDescripcion = '${oneMission.missionDescripcion}' `;
    }
    const result = (0, execSQL_1.default)(query);
    return result;
};
exports.dbGetOneMission = dbGetOneMission;
const dbInsertMission = (newMission) => {
    let fecha = new Date().toLocaleString(globals_1.APP_GLOBAL.APP_DATE, { timeZone: globals_1.APP_GLOBAL.APP_TZ });
    const query = `INSERT INTO mission 
    (idAlliance, type, missionDescripcion, missionAlias, created, updated) 
    VALUES 
    (${newMission.idAlliance}, '${newMission.type}', '${newMission.missionDescripcion}', '${newMission.missionAlias}', '${fecha}', '${fecha}')`;
    const result = (0, execSQL_1.default)(query);
    return result;
};
exports.dbInsertMission = dbInsertMission;
const dbUpdateMission = (updMission) => {
    let fecha = new Date().toLocaleString(globals_1.APP_GLOBAL.APP_DATE, { timeZone: globals_1.APP_GLOBAL.APP_TZ });
    const query = `UPDATE mission 
    SET 
    idAlliance = '${updMission.idAlliance}', 
    type = '${updMission.type}', 
    missionDescripcion = '${updMission.missionDescripcion}', 
    missionAlias = '${updMission.missionAlias}',
    updated = '${fecha}'
    WHERE idMission = '${updMission.idMission}' `;
    const result = (0, execSQL_1.default)(query);
    return result;
};
exports.dbUpdateMission = dbUpdateMission;
const dbDeleteMission = (delMission) => {
    const query = `DELETE FROM mission WHERE idMission = '${delMission.idMission}'`;
    const result = (0, execSQL_1.default)(query);
    return result;
};
exports.dbDeleteMission = dbDeleteMission;
//# sourceMappingURL=missionDB.js.map