"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEquipmentsByUserId = exports.deleteEquipment = exports.updateEquipment = exports.getEquipmentById = exports.getAllEquipments = exports.createEquipment = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const createEquipment = (data) => prisma_1.default.equipment.create({ data });
exports.createEquipment = createEquipment;
const getAllEquipments = () => prisma_1.default.equipment.findMany({ include: { assignedTo: true } });
exports.getAllEquipments = getAllEquipments;
const getEquipmentById = (id) => prisma_1.default.equipment.findUnique({ where: { id }, include: { assignedTo: true } });
exports.getEquipmentById = getEquipmentById;
const updateEquipment = (id, data) => prisma_1.default.equipment.update({ where: { id }, data });
exports.updateEquipment = updateEquipment;
const deleteEquipment = (id) => prisma_1.default.equipment.delete({ where: { id } });
exports.deleteEquipment = deleteEquipment;
const getEquipmentsByUserId = (userId) => prisma_1.default.equipment.findMany({ where: { userId } });
exports.getEquipmentsByUserId = getEquipmentsByUserId;
