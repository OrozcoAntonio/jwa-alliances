"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbDeleteUser = exports.dbGetOneUser = exports.dbUpdateUser = exports.dbInsertUser = exports.dbGetAllUser = void 0;
const globals_1 = require("../globals");
const execSQL_1 = __importDefault(require("../config/execSQL"));
const dbGetAllUser = () => {
    const query = `SELECT PL.idPlayer, AL.Alliance, PL.jwaPlayer, PL.discordID, PL.pseudonimo
     FROM player PL
     INNER JOIN alliance AL ON AL.idAlliance = PL.idAlliance`;
    const result = (0, execSQL_1.default)(query);
    return result;
};
exports.dbGetAllUser = dbGetAllUser;
const dbGetOneUser = (user) => {
    let query;
    if (user.idPlayer !== 0) {
        query = `SELECT PL.idPlayer, AL.Alliance, PL.jwaPlayer, PL.discordID, PL.pseudonimo, PL.idAlliance 
        FROM player PL 
        INNER JOIN alliance AL ON AL.idAlliance = PL.idAlliance
        WHERE PL.idPlayer = ${user.idPlayer}`;
    }
    else {
        query = `SELECT PL.idPlayer, AL.Alliance, PL.jwaPlayer, PL.discordID, PL.pseudonimo, PL.idAlliance 
        FROM player PL 
        INNER JOIN alliance AL ON AL.idAlliance = PL.idAlliance 
        WHERE AL.idAlliance = ${user.idAlliance} 
        AND PL.jwaPlayer = '${user.jwaPlayer}' `;
    }
    const result = (0, execSQL_1.default)(query);
    return result;
};
exports.dbGetOneUser = dbGetOneUser;
const dbInsertUser = (newUser) => {
    let fecha = new Date().toLocaleString(globals_1.APP_GLOBAL.APP_DATE, { timeZone: globals_1.APP_GLOBAL.APP_TZ });
    const query = `INSERT INTO player 
    (idAlliance, jwaPlayer, discordID, 
        pseudonimo, created, updated) 
    VALUES 
    (${newUser.idAlliance}, '${newUser.jwaPlayer}', '${newUser.discordID}', 
    '${newUser.pseudonimo}', '${fecha}', '${fecha}')`;
    const result = (0, execSQL_1.default)(query);
    return result;
};
exports.dbInsertUser = dbInsertUser;
const dbUpdateUser = (updUser) => {
    let fecha = new Date().toLocaleString(globals_1.APP_GLOBAL.APP_DATE, { timeZone: globals_1.APP_GLOBAL.APP_TZ });
    const query = `UPDATE player 
    SET 
    idAlliance = '${updUser.idAlliance}', 
    jwaPlayer = '${updUser.jwaPlayer}', 
    discordID = '${updUser.discordID}', 
    pseudonimo = '${updUser.pseudonimo}',
    updated = '${fecha}'
    WHERE idPlayer = '${updUser.idPlayer}' `;
    const result = (0, execSQL_1.default)(query);
    return result;
};
exports.dbUpdateUser = dbUpdateUser;
const dbDeleteUser = (delUser) => {
    const query = `DELETE FROM player WHERE idPlayer = '${delUser.idPlayer}'`;
    const result = (0, execSQL_1.default)(query);
    return result;
};
exports.dbDeleteUser = dbDeleteUser;
//# sourceMappingURL=userDB.js.map