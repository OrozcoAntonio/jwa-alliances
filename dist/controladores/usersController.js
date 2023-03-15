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
exports.ctrlDeleteOneUser = exports.ctrlUpdateOneUser = exports.ctrlCreateOneUser = exports.ctrlGetOneUser = exports.ctrlGetAllUser = void 0;
const userService_1 = require("../servicios/userService");
const ctrlGetAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield (0, userService_1.srvGetAllUsers)();
    res.status(200).json(allUsers);
});
exports.ctrlGetAllUser = ctrlGetAllUser;
const ctrlGetOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idPlayer = 0, jwaPlayer = '', idAlliance = 0 } = req.body;
    const getUser = {
        idPlayer,
        jwaPlayer,
        idAlliance
    };
    const getOneUser = yield (0, userService_1.srvGetOneUser)(getUser);
    res.status(200).json(getOneUser);
});
exports.ctrlGetOneUser = ctrlGetOneUser;
const ctrlCreateOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idPlayer, idAlliance = req.app.get('idAlliance'), jwaPlayer, discordID, pseudonimo, createdAt = Date, updatedAt = Date } = req.body;
    if (!jwaPlayer || !discordID || !pseudonimo) {
        res.status(400).end();
        return;
    }
    const newUser = {
        idPlayer,
        idAlliance,
        jwaPlayer,
        discordID,
        pseudonimo,
        createdAt,
        updatedAt
    };
    const addedUser = yield (0, userService_1.srvCreateNewUser)(newUser);
    res.status(201).json(addedUser);
});
exports.ctrlCreateOneUser = ctrlCreateOneUser;
const ctrlUpdateOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idPlayer, idAlliance = req.app.get('idAlliance'), jwaPlayer, discordID, pseudonimo } = req.body;
    if (!jwaPlayer || !discordID || !pseudonimo) {
        res.status(400).end();
        return;
    }
    const updUser = {
        idPlayer,
        idAlliance,
        jwaPlayer,
        discordID,
        pseudonimo
    };
    const updatedUser = yield (0, userService_1.srvUpdateOneUser)(updUser);
    res.status(201).json(updatedUser);
});
exports.ctrlUpdateOneUser = ctrlUpdateOneUser;
const ctrlDeleteOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idPlayer, idAlliance = req.app.get('idAlliance'), jwaPlayer = '' } = req.body;
    if (!idPlayer) {
        res.status(400).end();
        return;
    }
    const delUser = { idPlayer, idAlliance, jwaPlayer };
    const idUser = yield (0, userService_1.srvDeleteOneUser)(delUser);
    res.status(201).json(idUser);
});
exports.ctrlDeleteOneUser = ctrlDeleteOneUser;
//# sourceMappingURL=usersController.js.map