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
exports.ctrlDeleteOneAlliance = exports.ctrlUpdateOneAlliance = exports.ctrlCreateOneAlliance = exports.ctrlGetOneAlliance = exports.ctrlGetAllAlliance = void 0;
const allianceService_1 = require("../servicios/allianceService");
const ctrlGetAllAlliance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allAlliance = yield (0, allianceService_1.srvGetAllAlliance)();
    res.status(200).json(allAlliance);
});
exports.ctrlGetAllAlliance = ctrlGetAllAlliance;
const ctrlGetOneAlliance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idAlliance } = req.body;
    const getAlliance = { idAlliance };
    const getOneAlliance = yield (0, allianceService_1.srvGetOneAlliance)(getAlliance);
    res.status(200).json(getOneAlliance);
});
exports.ctrlGetOneAlliance = ctrlGetOneAlliance;
const ctrlCreateOneAlliance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idAlliance, Alliance } = req.body;
    if (!Alliance) {
        res.status(400).end();
        return;
    }
    const newAlliance = { idAlliance, Alliance };
    const addedAlliance = yield (0, allianceService_1.srvCreateNewAlliance)(newAlliance);
    res.status(201).json(addedAlliance);
});
exports.ctrlCreateOneAlliance = ctrlCreateOneAlliance;
const ctrlUpdateOneAlliance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idAlliance = req.app.get('idAlliance'), Alliance } = req.body;
    if (!idAlliance || !Alliance) {
        res.status(400).end();
        return;
    }
    const updAlliance = {
        idAlliance,
        Alliance
    };
    const getUpdAlliance = yield (0, allianceService_1.srvUpdateOneAlliance)(updAlliance);
    res.status(201).json(getUpdAlliance);
});
exports.ctrlUpdateOneAlliance = ctrlUpdateOneAlliance;
const ctrlDeleteOneAlliance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idAlliance } = req.body;
    if (!idAlliance) {
        res.status(400).end();
        return;
    }
    const delAlliance = { idAlliance };
    const getDelAlliance = yield (0, allianceService_1.srvDeleteOneAlliance)(delAlliance);
    res.status(201).json(getDelAlliance);
});
exports.ctrlDeleteOneAlliance = ctrlDeleteOneAlliance;
//# sourceMappingURL=allianceController.js.map