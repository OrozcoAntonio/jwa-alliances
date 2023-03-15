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
exports.srvDeleteOneAlliance = exports.srvUpdateOneAlliance = exports.srvCreateNewAlliance = exports.srvGetOneAlliance = exports.srvGetAllAlliance = void 0;
const allianceDB_1 = require("../basededatos/allianceDB");
const srvGetAllAlliance = () => __awaiter(void 0, void 0, void 0, function* () {
    const jsonAllAlliance = { 'statusSrvc': '', 'responseDB': {} };
    const jsonAlliance = yield (0, allianceDB_1.dbGetAllAlliance)();
    if (jsonAlliance.status === "error") {
        jsonAllAlliance.statusSrvc = jsonAlliance.status;
        jsonAllAlliance.responseDB = jsonAlliance.errors;
    }
    else if (jsonAlliance.dataLenght > 0) {
        jsonAllAlliance.statusSrvc = 'exist';
        jsonAllAlliance.responseDB = jsonAlliance;
    }
    else {
        jsonAllAlliance.statusSrvc = 'notfound';
    }
    return jsonAllAlliance;
});
exports.srvGetAllAlliance = srvGetAllAlliance;
const srvGetOneAlliance = (idAlliance) => __awaiter(void 0, void 0, void 0, function* () {
    const respOneAlliance = { 'statusSrvc': '', 'responseDB': {} };
    const jsonAlliance = yield (0, allianceDB_1.dbGetOneAlliance)(idAlliance);
    if (jsonAlliance.status === "error") {
        respOneAlliance.statusSrvc = jsonAlliance.status;
        respOneAlliance.responseDB = jsonAlliance.errors;
    }
    else if (jsonAlliance.dataLenght > 0) {
        respOneAlliance.statusSrvc = 'exist';
        respOneAlliance.responseDB = jsonAlliance;
    }
    else {
        respOneAlliance.statusSrvc = 'notfound';
    }
    return respOneAlliance;
});
exports.srvGetOneAlliance = srvGetOneAlliance;
const srvCreateNewAlliance = (newAlliance) => __awaiter(void 0, void 0, void 0, function* () {
    const respNewAlliance = { 'statusSrvc': '', 'responseDB': {} };
    const allianceExist = yield (0, allianceDB_1.dbGetOneAlliance)(newAlliance);
    if (allianceExist.status === "error") {
        respNewAlliance.statusSrvc = allianceExist.status;
        respNewAlliance.responseDB = allianceExist.errors;
    }
    else if (allianceExist.dataLenght > 0) {
        respNewAlliance.statusSrvc = 'exist';
        respNewAlliance.responseDB = allianceExist;
    }
    else {
        const allianceAdded = yield (0, allianceDB_1.dbInsertAlliance)(newAlliance);
        if (allianceAdded.data > 0) {
            respNewAlliance.statusSrvc = allianceAdded.status;
        }
        else {
            respNewAlliance.statusSrvc = 'error';
        }
        respNewAlliance.responseDB = allianceAdded;
    }
    return respNewAlliance;
});
exports.srvCreateNewAlliance = srvCreateNewAlliance;
const srvUpdateOneAlliance = (uptAlliance) => __awaiter(void 0, void 0, void 0, function* () {
    const respUpdAlliance = { 'statusSrvc': '', 'responseDB': {} };
    const allianceExist = yield (0, allianceDB_1.dbGetOneAlliance)(uptAlliance);
    if (allianceExist.status === "error") {
        respUpdAlliance.statusSrvc = allianceExist.status;
        respUpdAlliance.responseDB = allianceExist.errors;
    }
    else if (allianceExist.dataLenght > 0) {
        const allianceUpdated = yield (0, allianceDB_1.dbUpdateAlliance)(uptAlliance);
        respUpdAlliance.statusSrvc = allianceUpdated.status;
        respUpdAlliance.responseDB = allianceUpdated;
    }
    else {
        respUpdAlliance.statusSrvc = 'notfound';
    }
    return respUpdAlliance;
});
exports.srvUpdateOneAlliance = srvUpdateOneAlliance;
const srvDeleteOneAlliance = (delAlliance) => __awaiter(void 0, void 0, void 0, function* () {
    const respDelAlliance = { 'statusSrvc': '', 'responseDB': {} };
    const allianceExist = yield (0, allianceDB_1.dbGetOneAlliance)(delAlliance);
    if (allianceExist.status === "error") {
        respDelAlliance.statusSrvc = allianceExist.status;
        respDelAlliance.responseDB = allianceExist.errors;
    }
    else if (allianceExist.dataLenght > 0) {
        const allianceDeleted = yield (0, allianceDB_1.dbDeleteAlliance)(delAlliance);
        respDelAlliance.statusSrvc = allianceDeleted.status;
        respDelAlliance.responseDB = allianceDeleted;
    }
    else {
        respDelAlliance.statusSrvc = 'notfound';
    }
    return respDelAlliance;
});
exports.srvDeleteOneAlliance = srvDeleteOneAlliance;
//# sourceMappingURL=allianceService.js.map