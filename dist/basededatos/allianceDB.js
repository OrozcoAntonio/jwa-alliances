"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbDeleteAlliance = exports.dbGetOneAlliance = exports.dbUpdateAlliance = exports.dbInsertAlliance = exports.dbGetAllAlliance = void 0;
const execSQL_1 = __importDefault(require("../config/execSQL"));
const dbGetAllAlliance = () => {
    const query = `SELECT idAlliance, Alliance FROM alliance `;
    const result = (0, execSQL_1.default)(query);
    return result;
};
exports.dbGetAllAlliance = dbGetAllAlliance;
const dbGetOneAlliance = (alliance) => {
    let query;
    if (alliance.idAlliance !== undefined) {
        query = `SELECT idAlliance, Alliance FROM alliance 
        WHERE idAlliance IN ('${alliance.idAlliance}')`;
    }
    else {
        query = `SELECT idAlliance, Alliance FROM alliance 
        WHERE Alliance IN ('${alliance.idAlliance}')`;
    }
    const result = (0, execSQL_1.default)(query);
    return result;
};
exports.dbGetOneAlliance = dbGetOneAlliance;
const dbInsertAlliance = (newAlliance) => {
    const query = `INSERT INTO alliance 
    (Alliance) VALUES ('${newAlliance.Alliance}')`;
    const result = (0, execSQL_1.default)(query);
    return result;
};
exports.dbInsertAlliance = dbInsertAlliance;
const dbUpdateAlliance = (updAlliance) => {
    const query = `UPDATE alliance SET idAlliance = '${updAlliance.idAlliance}' WHERE idAlliance = '${updAlliance.idAlliance}' `;
    const result = (0, execSQL_1.default)(query);
    return result;
};
exports.dbUpdateAlliance = dbUpdateAlliance;
const dbDeleteAlliance = (delAlliance) => {
    const query = `DELETE FROM alliance WHERE idAlliance = '${delAlliance.idAlliance}'`;
    const result = (0, execSQL_1.default)(query);
    return result;
};
exports.dbDeleteAlliance = dbDeleteAlliance;
//# sourceMappingURL=allianceDB.js.map