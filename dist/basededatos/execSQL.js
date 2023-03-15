"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
const response_1 = __importDefault(require("../response"));
function execSQL(strSQL) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const [rows, fields] = yield db_1.pool.query(strSQL);
            response_1.default.status = "success";
            response_1.default.data = [rows];
            response_1.default.dataLenght = [rows].length;
            // response.message = [rows, fields].serverStatus
            // response.affectedRows = [rows, fields].affectedRows
            // response.insertId = [rows, fields].insertId
            response_1.default.source = strSQL;
            return response_1.default;
        }
        catch (error) {
            response_1.default.status = "error";
            response_1.default.message = "Error SQL";
            response_1.default.errors = { "code": error, "title": error, "detail": error, "query": error };
            //        response.errors = { "code": error.errno, "title": error.code, "detail": error.sqlMessage, "query": error.sql }
            return response_1.default;
        }
    });
}
exports.default = execSQL;
//     code: 'ER_PARSE_ERROR',
//     errno: 1064,
//     sql: 'SELECT PL.idPlayer, AL.Alliance, PL.jwaPlayer, PL.discordID, PL.pseudonimo, PL.idAlliance, \n' +
//     sqlState: '42000',
//     sqlMessage: "You have an error in your SQL syntax; check the manual that corresponds to your
//   MariaDB server version for the right syntax to use near 'FROM player PL \n" +
//# sourceMappingURL=execSQL.js.map