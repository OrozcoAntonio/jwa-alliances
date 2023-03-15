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
exports.srvDeleteOneUser = exports.srvUpdateOneUser = exports.srvCreateNewUser = exports.srvGetOneUser = exports.srvGetAllUsers = void 0;
const userDB_1 = require("../basededatos/userDB");
const srvGetAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const jsonAlluser = { 'statusSrvc': '', 'responseDB': {} };
    const jsonAllUserData = yield (0, userDB_1.dbGetAllUser)();
    if (jsonAllUserData.status === "error") {
        jsonAlluser.statusSrvc = jsonAllUserData.status;
        jsonAlluser.responseDB = jsonAllUserData.errors;
    }
    else if (jsonAllUserData.dataLenght > 0) {
        jsonAlluser.statusSrvc = 'exist';
        jsonAlluser.responseDB = jsonAllUserData;
    }
    else {
        jsonAlluser.statusSrvc = 'notfound';
    }
    return jsonAlluser;
});
exports.srvGetAllUsers = srvGetAllUsers;
const srvGetOneUser = (idUser) => __awaiter(void 0, void 0, void 0, function* () {
    const respOneUser = { 'statusSrvc': '', 'responseDB': {} };
    const jsonUser = yield (0, userDB_1.dbGetOneUser)(idUser);
    if (jsonUser.status === "error") {
        respOneUser.statusSrvc = jsonUser.status;
        respOneUser.responseDB = jsonUser.errors;
    }
    else if (jsonUser.dataLenght > 0) {
        respOneUser.statusSrvc = 'exist';
        respOneUser.responseDB = jsonUser;
    }
    else {
        respOneUser.statusSrvc = 'notfound';
    }
    return respOneUser;
});
exports.srvGetOneUser = srvGetOneUser;
const srvCreateNewUser = (newUser) => __awaiter(void 0, void 0, void 0, function* () {
    const respNewUser = { 'statusSrvc': '', 'responseDB': {} };
    const userExist = yield (0, userDB_1.dbGetOneUser)(newUser);
    const userToInsert = Object.assign({}, newUser);
    if (userExist.status === "error") {
        respNewUser.statusSrvc = userExist.status;
        respNewUser.responseDB = userExist.errors;
    }
    else if (userExist.dataLenght > 0) {
        respNewUser.statusSrvc = 'exist';
        respNewUser.responseDB = userExist;
    }
    else {
        const userAdded = yield (0, userDB_1.dbInsertUser)(userToInsert);
        if (userAdded.data > 0) {
            respNewUser.statusSrvc = userAdded.status;
        }
        else {
            respNewUser.statusSrvc = 'error';
        }
        respNewUser.responseDB = userAdded;
    }
    return respNewUser;
});
exports.srvCreateNewUser = srvCreateNewUser;
const srvUpdateOneUser = (uptUser) => __awaiter(void 0, void 0, void 0, function* () {
    const respUpdUser = { 'statusSrvc': '', 'responseDB': {} };
    const userExist = yield (0, userDB_1.dbGetOneUser)(uptUser);
    const userToUpdate = Object.assign({}, uptUser);
    if (userExist.status === "error") {
        respUpdUser.statusSrvc = userExist.status;
        respUpdUser.responseDB = userExist.errors;
    }
    else if (userExist.dataLenght > 0) {
        const userUpdated = yield (0, userDB_1.dbUpdateUser)(userToUpdate);
        respUpdUser.statusSrvc = userUpdated.status;
        respUpdUser.responseDB = userUpdated;
    }
    else {
        respUpdUser.statusSrvc = 'notfound';
    }
    return respUpdUser;
});
exports.srvUpdateOneUser = srvUpdateOneUser;
const srvDeleteOneUser = (delUser) => __awaiter(void 0, void 0, void 0, function* () {
    const respDelUser = { 'statusSrvc': '', 'responseDB': {} };
    const userExist = yield (0, userDB_1.dbGetOneUser)(delUser);
    if (userExist.status === "error") {
        respDelUser.statusSrvc = userExist.status;
        respDelUser.responseDB = userExist.errors;
    }
    else if (userExist.dataLenght > 0) {
        const userDeleted = yield (0, userDB_1.dbDeleteUser)(delUser);
        respDelUser.statusSrvc = userDeleted.status;
        respDelUser.responseDB = userDeleted.data;
    }
    else {
        respDelUser.statusSrvc = 'notfound';
    }
    return respDelUser;
});
exports.srvDeleteOneUser = srvDeleteOneUser;
//# sourceMappingURL=userService.js.map