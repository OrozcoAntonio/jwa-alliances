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
exports.ctrlDeleteOneRecord = exports.ctrlUpdateOneRecord = exports.ctrlCreateOneRecord = exports.ctrlGetRecordAnioMision = exports.ctrlGetRecordSemanaMision = exports.ctrlGetRecordAnioPlayer = exports.ctrlGetRecordSemanaPlayer = exports.ctrlGetRecordAnio = exports.ctrlGetRecordSemana = exports.ctrlGetOneRecord = void 0;
const recordService_1 = require("../servicios/recordService");
//'idRecord'|'anio'|'semana'|'idPlayer'|'idMission'|'posicion'|'rank'
const ctrlGetOneRecord = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idRecord, anio, semana } = req.body;
    if (!idRecord || !anio || !semana) {
        res.status(400).end();
        return;
    }
    const getOneRecord = { idRecord, anio, semana };
    const rtnRecord = yield (0, recordService_1.srvGetOneRecord)(getOneRecord);
    res.status(201).json(rtnRecord);
});
exports.ctrlGetOneRecord = ctrlGetOneRecord;
const ctrlGetRecordSemana = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { anio, semana } = req.params;
    if (!anio || !semana) {
        res.status(400).end();
        return;
    }
    const getRecord = { anio, semana };
    const rtnRecord = yield (0, recordService_1.srvGetRecordSemana)(getRecord);
    res.status(201).json(rtnRecord);
});
exports.ctrlGetRecordSemana = ctrlGetRecordSemana;
const ctrlGetRecordAnio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { anio } = req.params;
    if (!anio) {
        res.status(400).end();
        return;
    }
    const getRecord = { anio };
    const rtnRecord = yield (0, recordService_1.srvGetRecordAnio)(getRecord);
    res.status(201).json(rtnRecord);
});
exports.ctrlGetRecordAnio = ctrlGetRecordAnio;
const ctrlGetRecordSemanaPlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { anio, semana, idPlayer } = req.params;
    if (!anio || !semana || !idPlayer) {
        res.status(400).end();
        return;
    }
    const getRecord = { anio, semana, idPlayer };
    const rtnRecord = yield (0, recordService_1.srvGetRecordSemanaPlayer)(getRecord);
    res.status(201).json(rtnRecord);
});
exports.ctrlGetRecordSemanaPlayer = ctrlGetRecordSemanaPlayer;
const ctrlGetRecordAnioPlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { anio, idPlayer } = req.params;
    if (!anio || !idPlayer) {
        res.status(400).end();
        return;
    }
    const getRecord = { anio, idPlayer };
    const rtnRecord = yield (0, recordService_1.srvGetRecordAnioPlayer)(getRecord);
    res.status(201).json(rtnRecord);
});
exports.ctrlGetRecordAnioPlayer = ctrlGetRecordAnioPlayer;
const ctrlGetRecordSemanaMision = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { anio, semana, idMision } = req.params;
    if (!anio || !semana || !idMision) {
        res.status(400).end();
        return;
    }
    const getRecord = { anio, semana, idMision };
    const rtnRecord = yield (0, recordService_1.srvGetRecordSemanaMision)(getRecord);
    res.status(201).json(rtnRecord);
});
exports.ctrlGetRecordSemanaMision = ctrlGetRecordSemanaMision;
const ctrlGetRecordAnioMision = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { anio, idMision } = req.params;
    if (!anio || !idMision) {
        res.status(400).end();
        return;
    }
    const getRecord = { anio, idMision };
    const rtnRecord = yield (0, recordService_1.srvGetRecordAnioMision)(getRecord);
    res.status(201).json(rtnRecord);
});
exports.ctrlGetRecordAnioMision = ctrlGetRecordAnioMision;
const ctrlCreateOneRecord = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { anio, semana, idPlayer, idMission, posicion, rank } = req.body;
    if (!anio || !semana || !idPlayer || !idMission || !posicion || !rank) {
        res.status(400).end();
        return;
    }
    const updRecord = { anio, semana, idPlayer, idMission, posicion, rank };
    const getUpdAlliance = yield (0, recordService_1.srvCreateOneRecord)(updRecord);
    res.status(201).json(getUpdAlliance);
});
exports.ctrlCreateOneRecord = ctrlCreateOneRecord;
const ctrlUpdateOneRecord = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.ctrlUpdateOneRecord = ctrlUpdateOneRecord;
const ctrlDeleteOneRecord = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idRecord, anio, semana, idPlayer, idMission, posicion, rank } = req.body;
    if (!idRecord || !anio || !semana ||
        !idPlayer || !idMission || !posicion || !rank) {
        res.status(400).end();
        return;
    }
    const updRecord = { idRecord, anio, semana, idPlayer, idMission, posicion, rank };
    const getUpdAlliance = yield (0, recordService_1.srvDeleteOneRecord)(updRecord);
    res.status(201).json(getUpdAlliance);
});
exports.ctrlDeleteOneRecord = ctrlDeleteOneRecord;
//# sourceMappingURL=recordController.js.map