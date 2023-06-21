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
Object.defineProperty(exports, "__esModule", { value: true });
exports.srvDeleteOneRecord = exports.srvUpdateOneRecord = exports.srvCreateOneRecord = exports.srvGetRecordAnioMision = exports.srvGetRecordSemanaMision = exports.srvGetRecordAnioPlayer = exports.srvGetRecordSemanaPlayer = exports.srvGetRecordAnio = exports.srvGetRecordSemana = exports.srvGetOneRecord = void 0;
const recordDB_1 = require("../basededatos/recordDB");
const srvGetOneRecord = (idRecord) => __awaiter(void 0, void 0, void 0, function* () {
    const respOneRecord = { 'statusSrvc': '', 'responseDB': {} };
    const jsonRecord = yield (0, recordDB_1.dbGetOneRecord)(idRecord);
    if (jsonRecord.status === "error") {
        respOneRecord.statusSrvc = jsonRecord.status;
        respOneRecord.responseDB = jsonRecord.errors;
    }
    else if (jsonRecord.dataLenght > 0) {
        respOneRecord.statusSrvc = 'exist';
        respOneRecord.responseDB = jsonRecord;
    }
    else {
        respOneRecord.statusSrvc = 'notfound';
    }
    return respOneRecord;
});
exports.srvGetOneRecord = srvGetOneRecord;
const srvGetRecordSemana = (idRecord) => __awaiter(void 0, void 0, void 0, function* () {
    const respOneRecord = { 'statusSrvc': '', 'responseDB': {} };
    const jsonRecord = yield (0, recordDB_1.dbGetRecordSemana)(idRecord);
    if (jsonRecord.status === "error") {
        respOneRecord.statusSrvc = jsonRecord.status;
        respOneRecord.responseDB = jsonRecord.errors;
    }
    else if (jsonRecord.dataLenght > 0) {
        respOneRecord.statusSrvc = 'exist';
        respOneRecord.responseDB = jsonRecord;
    }
    else {
        respOneRecord.statusSrvc = 'notfound';
    }
    return respOneRecord;
});
exports.srvGetRecordSemana = srvGetRecordSemana;
const srvGetRecordAnio = (idRecord) => __awaiter(void 0, void 0, void 0, function* () {
    const respOneRecord = { 'statusSrvc': '', 'responseDB': {} };
    const jsonRecord = yield (0, recordDB_1.dbGetRecordAnio)(idRecord);
    if (jsonRecord.status === "error") {
        respOneRecord.statusSrvc = jsonRecord.status;
        respOneRecord.responseDB = jsonRecord.errors;
    }
    else if (jsonRecord.dataLenght > 0) {
        respOneRecord.statusSrvc = 'exist';
        respOneRecord.responseDB = jsonRecord;
    }
    else {
        respOneRecord.statusSrvc = 'notfound';
    }
    return respOneRecord;
});
exports.srvGetRecordAnio = srvGetRecordAnio;
const srvGetRecordSemanaPlayer = (idRecord) => __awaiter(void 0, void 0, void 0, function* () {
    const respOneRecord = { 'statusSrvc': '', 'responseDB': {} };
    const jsonRecord = yield (0, recordDB_1.dbGetRecordSemanaPlayer)(idRecord);
    if (jsonRecord.status === "error") {
        respOneRecord.statusSrvc = jsonRecord.status;
        respOneRecord.responseDB = jsonRecord.errors;
    }
    else if (jsonRecord.dataLenght > 0) {
        respOneRecord.statusSrvc = 'exist';
        respOneRecord.responseDB = jsonRecord;
    }
    else {
        respOneRecord.statusSrvc = 'notfound';
    }
    return respOneRecord;
});
exports.srvGetRecordSemanaPlayer = srvGetRecordSemanaPlayer;
const srvGetRecordAnioPlayer = (idRecord) => __awaiter(void 0, void 0, void 0, function* () {
    const respOneRecord = { 'statusSrvc': '', 'responseDB': {} };
    const jsonRecord = yield (0, recordDB_1.dbGetRecordAnioPlayer)(idRecord);
    if (jsonRecord.status === "error") {
        respOneRecord.statusSrvc = jsonRecord.status;
        respOneRecord.responseDB = jsonRecord.errors;
    }
    else if (jsonRecord.dataLenght > 0) {
        respOneRecord.statusSrvc = 'exist';
        respOneRecord.responseDB = jsonRecord;
    }
    else {
        respOneRecord.statusSrvc = 'notfound';
    }
    return respOneRecord;
});
exports.srvGetRecordAnioPlayer = srvGetRecordAnioPlayer;
const srvGetRecordSemanaMision = (idRecord) => __awaiter(void 0, void 0, void 0, function* () {
    const respOneRecord = { 'statusSrvc': '', 'responseDB': {} };
    const jsonRecord = yield (0, recordDB_1.dbGetRecordSemanaMision)(idRecord);
    if (jsonRecord.status === "error") {
        respOneRecord.statusSrvc = jsonRecord.status;
        respOneRecord.responseDB = jsonRecord.errors;
    }
    else if (jsonRecord.dataLenght > 0) {
        respOneRecord.statusSrvc = 'exist';
        respOneRecord.responseDB = jsonRecord;
    }
    else {
        respOneRecord.statusSrvc = 'notfound';
    }
    return respOneRecord;
});
exports.srvGetRecordSemanaMision = srvGetRecordSemanaMision;
const srvGetRecordAnioMision = (idRecord) => __awaiter(void 0, void 0, void 0, function* () {
    const respOneRecord = { 'statusSrvc': '', 'responseDB': {} };
    const jsonRecord = yield (0, recordDB_1.dbGetRecordAnioMision)(idRecord);
    if (jsonRecord.status === "error") {
        respOneRecord.statusSrvc = jsonRecord.status;
        respOneRecord.responseDB = jsonRecord.errors;
    }
    else if (jsonRecord.dataLenght > 0) {
        respOneRecord.statusSrvc = 'exist';
        respOneRecord.responseDB = jsonRecord;
    }
    else {
        respOneRecord.statusSrvc = 'notfound';
    }
    return respOneRecord;
});
exports.srvGetRecordAnioMision = srvGetRecordAnioMision;
const srvCreateOneRecord = (newRecord) => __awaiter(void 0, void 0, void 0, function* () {
    const respNewRecord = { 'statusSrvc': '', 'responseDB': {} };
    const recordExist = yield (0, recordDB_1.dbGetOneRecord)(newRecord);
    const recordToInsert = Object.assign({}, newRecord);
    if (recordExist.status === "error") {
        respNewRecord.statusSrvc = recordExist.status;
        respNewRecord.responseDB = recordExist.errors;
    }
    else if (recordExist.dataLenght > 0) {
        respNewRecord.statusSrvc = 'exist';
        respNewRecord.responseDB = recordExist;
    }
    else {
        const recordAdded = yield (0, recordDB_1.dbInsertRecord)(recordToInsert);
        if (recordAdded.dataLenght > 0) {
            respNewRecord.statusSrvc = recordAdded.status;
        }
        else {
            respNewRecord.statusSrvc = 'error';
        }
        respNewRecord.responseDB = recordAdded;
    }
    return respNewRecord;
});
exports.srvCreateOneRecord = srvCreateOneRecord;
const srvUpdateOneRecord = (uptRecord) => __awaiter(void 0, void 0, void 0, function* () {
    const respUpdRecord = { 'statusSrvc': '', 'responseDB': {} };
    const recordExist = yield (0, recordDB_1.dbGetOneRecord)(uptRecord);
    const recordToUpdate = Object.assign({}, uptRecord);
    if (recordExist.status === "error") {
        respUpdRecord.statusSrvc = recordExist.status;
        respUpdRecord.responseDB = recordExist.errors;
    }
    else if (recordExist.dataLenght > 0) {
        const recordUpdated = yield (0, recordDB_1.dbUpdateRecord)(recordToUpdate);
        respUpdRecord.statusSrvc = recordUpdated.status;
        respUpdRecord.responseDB = recordUpdated;
    }
    else {
        respUpdRecord.statusSrvc = 'notfound';
    }
    return respUpdRecord;
});
exports.srvUpdateOneRecord = srvUpdateOneRecord;
const srvDeleteOneRecord = (delRecord) => __awaiter(void 0, void 0, void 0, function* () {
    const respDelRecord = { 'statusSrvc': '', 'responseDB': {} };
    const recordExist = yield (0, recordDB_1.dbGetOneRecord)(delRecord);
    if (recordExist.status === "error") {
        respDelRecord.statusSrvc = recordExist.status;
        respDelRecord.responseDB = recordExist.errors;
    }
    else if (recordExist.dataLenght > 0) {
        const recordDeleted = yield (0, recordDB_1.dbDeleteRecord)(delRecord);
        respDelRecord.statusSrvc = recordDeleted.status;
        respDelRecord.responseDB = recordDeleted.data;
    }
    else {
        respDelRecord.statusSrvc = 'notfound';
    }
    return respDelRecord;
});
exports.srvDeleteOneRecord = srvDeleteOneRecord;
//# sourceMappingURL=recordService.js.map