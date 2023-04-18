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
exports.ctrlUpdateOneWeek = exports.ctrlGetOneWeek = void 0;
const recordService_1 = require("../servicios/recordService");
const ctrlGetOneWeek = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idRecord, anio, semana } = req.body;
    if (!idRecord || !anio || !semana) {
        res.status(400).end();
        return;
    }
    const getOneWeek = { idRecord, anio, semana };
    const rtnRecord = yield (0, recordService_1.srvGetOneRecord)(getOneWeek);
    res.status(201).json(rtnRecord);
});
exports.ctrlGetOneWeek = ctrlGetOneWeek;
const ctrlUpdateOneWeek = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idRecord, anio, semana, idPlayer, idMission, posicion, rank } = req.body;
    if (!idRecord || !anio || !semana ||
        !idPlayer || !idMission || !posicion || !rank) {
        res.status(400).end();
        return;
    }
    const updRecord = { idRecord, anio, semana, idPlayer, idMission, posicion, rank };
    const getUpdAlliance = yield (0, recordService_1.srvUpdateOneRecord)(updRecord);
    res.status(201).json(getUpdAlliance);
});
exports.ctrlUpdateOneWeek = ctrlUpdateOneWeek;
//# sourceMappingURL=recordController.js.map