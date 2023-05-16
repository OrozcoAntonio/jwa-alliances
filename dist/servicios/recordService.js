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
exports.srvDeleteOneMission = exports.srvUpdateOneMission = exports.srvCreateNewMission = exports.srvGetOneMission = void 0;
const missionDB_1 = require("../basededatos/missionDB");
const srvGetOneMission = (idMission) => __awaiter(void 0, void 0, void 0, function* () {
    const respOneMission = { 'statusSrvc': '', 'responseDB': {} };
    const jsonMission = yield (0, missionDB_1.dbGetOneMission)(idMission);
    if (jsonMission.status === "error") {
        respOneMission.statusSrvc = jsonMission.status;
        respOneMission.responseDB = jsonMission.errors;
    }
    else if (jsonMission.dataLenght > 0) {
        respOneMission.statusSrvc = 'exist';
        respOneMission.responseDB = jsonMission;
    }
    else {
        respOneMission.statusSrvc = 'notfound';
    }
    return respOneMission;
});
exports.srvGetOneMission = srvGetOneMission;
const srvCreateNewMission = (newMission) => __awaiter(void 0, void 0, void 0, function* () {
    const respNewMission = { 'statusSrvc': '', 'responseDB': {} };
    const missionExist = yield (0, missionDB_1.dbGetOneMission)(newMission);
    const missionToInsert = Object.assign({}, newMission);
    if (missionExist.status === "error") {
        respNewMission.statusSrvc = missionExist.status;
        respNewMission.responseDB = missionExist.errors;
    }
    else if (missionExist.dataLenght > 0) {
        respNewMission.statusSrvc = 'exist';
        respNewMission.responseDB = missionExist;
    }
    else {
        const missionAdded = yield (0, missionDB_1.dbInsertMission)(missionToInsert);
        if (missionAdded.dataLenght > 0) {
            respNewMission.statusSrvc = missionAdded.status;
        }
        else {
            respNewMission.statusSrvc = 'error';
        }
        respNewMission.responseDB = missionAdded;
    }
    return respNewMission;
});
exports.srvCreateNewMission = srvCreateNewMission;
const srvUpdateOneMission = (uptMission) => __awaiter(void 0, void 0, void 0, function* () {
    const respUpdMission = { 'statusSrvc': '', 'responseDB': {} };
    const missionExist = yield (0, missionDB_1.dbGetOneMission)(uptMission);
    const missionToUpdate = Object.assign({}, uptMission);
    if (missionExist.status === "error") {
        respUpdMission.statusSrvc = missionExist.status;
        respUpdMission.responseDB = missionExist.errors;
    }
    else if (missionExist.dataLenght > 0) {
        const missionUpdated = yield (0, missionDB_1.dbUpdateMission)(missionToUpdate);
        respUpdMission.statusSrvc = missionUpdated.status;
        respUpdMission.responseDB = missionUpdated;
    }
    else {
        respUpdMission.statusSrvc = 'notfound';
    }
    return respUpdMission;
});
exports.srvUpdateOneMission = srvUpdateOneMission;
const srvDeleteOneMission = (delMission) => __awaiter(void 0, void 0, void 0, function* () {
    const respDelMission = { 'statusSrvc': '', 'responseDB': {} };
    const missionExist = yield (0, missionDB_1.dbGetOneMission)(delMission);
    if (missionExist.status === "error") {
        respDelMission.statusSrvc = missionExist.status;
        respDelMission.responseDB = missionExist.errors;
    }
    else if (missionExist.dataLenght > 0) {
        const missionDeleted = yield (0, missionDB_1.dbDeleteMission)(delMission);
        respDelMission.statusSrvc = missionDeleted.status;
        respDelMission.responseDB = missionDeleted.data;
    }
    else {
        respDelMission.statusSrvc = 'notfound';
    }
    return respDelMission;
});
exports.srvDeleteOneMission = srvDeleteOneMission;
//# sourceMappingURL=recordService.js.map