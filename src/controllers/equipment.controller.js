"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEquipment = exports.updateEquipment = exports.getEquipment = exports.getEquipments = exports.createEquipment = void 0;
const service = __importStar(require("../services/equipment.service"));
const createEquipment = async (req, res) => {
    try {
        const equipment = await service.createEquipmentService(req.body);
        res.status(201).json(equipment);
    }
    catch (err) {
        res.status(err.status || 500).json({ message: err.message });
    }
};
exports.createEquipment = createEquipment;
const getEquipments = async (req, res) => {
    try {
        const equipments = req.user?.role === 'admin'
            ? await service.getAllEquipmentsService()
            : await service.getUserEquipmentsService(req.user.id);
        res.json(equipments);
    }
    catch (err) {
        res.status(err.status || 500).json({ message: err.message });
    }
};
exports.getEquipments = getEquipments;
const getEquipment = async (req, res) => {
    try {
        const equipment = await service.getEquipmentService(Number(req.params.id));
        if (!equipment)
            return res.status(404).json({ message: 'Equipo no encontrado' });
        if (req.user.role !== 'admin' && equipment.userId !== req.user.id)
            return res.status(403).json({ message: 'Acceso denegado' });
        res.json(equipment);
    }
    catch (err) {
        res.status(err.status || 500).json({ message: err.message });
    }
};
exports.getEquipment = getEquipment;
const updateEquipment = async (req, res) => {
    try {
        const updated = await service.updateEquipmentService(Number(req.params.id), req.body);
        res.json(updated);
    }
    catch (err) {
        res.status(err.status || 500).json({ message: err.message });
    }
};
exports.updateEquipment = updateEquipment;
const deleteEquipment = async (req, res) => {
    try {
        await service.deleteEquipmentService(Number(req.params.id));
        res.status(204).send();
    }
    catch (err) {
        res.status(err.status || 500).json({ message: err.message });
    }
};
exports.deleteEquipment = deleteEquipment;
