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
exports.ctrlDeleteOneMission = exports.ctrlUpdateOneMission = exports.ctrlCreateOneMission = exports.ctrlGetOneMission = exports.ctrlGetAllMission = void 0;
const missionService_1 = require("../servicios/missionService");
const ctrlGetAllMission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allMissions = yield (0, missionService_1.srvGetAllMission)();
    res.status(200).json(allMissions);
});
exports.ctrlGetAllMission = ctrlGetAllMission;
const ctrlGetOneMission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idMission = 0, idAlliance, type = '', missionDescripcion = '', missionAlias = '' } = req.body;
    const getMission = { idMission, idAlliance, type, missionDescripcion, missionAlias };
    const getOneMission = yield (0, missionService_1.srvGetOneMission)(getMission);
    res.status(200).json(getOneMission);
});
exports.ctrlGetOneMission = ctrlGetOneMission;
const ctrlCreateOneMission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idMission, idAlliance, type, missionDescripcion, missionAlias, createdAt = Date, updatedAt = Date } = req.body;
    if (!type || !missionDescripcion || !missionAlias) {
        res.status(400).end();
        return;
    }
    const newMission = { idMission, idAlliance, type, missionDescripcion, missionAlias };
    const addedMission = yield (0, missionService_1.srvCreateNewMission)(newMission);
    res.status(201).json(addedMission);
});
exports.ctrlCreateOneMission = ctrlCreateOneMission;
const ctrlUpdateOneMission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idMission, idAlliance, type, missionDescripcion, missionAlias } = req.body;
    if (!type || !missionDescripcion || !missionAlias) {
        res.status(400).end();
        return;
    }
    const updMission = { idMission, idAlliance, type, missionDescripcion, missionAlias };
    const updatedMission = yield (0, missionService_1.srvUpdateOneMission)(updMission);
    res.status(201).json(updatedMission);
});
exports.ctrlUpdateOneMission = ctrlUpdateOneMission;
const ctrlDeleteOneMission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idMission = 0, idAlliance, type = '', missionDescripcion = '', missionAlias = '' } = req.body;
    if (!idMission) {
        res.status(400).end();
        return;
    }
    const delMission = { idMission, idAlliance, type, missionDescripcion, missionAlias };
    const delrtnMission = yield (0, missionService_1.srvDeleteOneMission)(delMission);
    res.status(201).json(delrtnMission);
});
exports.ctrlDeleteOneMission = ctrlDeleteOneMission;
//# sourceMappingURL=MissionController.js.map