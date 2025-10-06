import prisma from '../config/prisma';
import { Equipment } from '@prisma/client';

export const createEquipment = (data: Partial<Equipment>) => prisma.equipment.create({ data });
export const getAllEquipments = () => prisma.equipment.findMany({ include: { assignedTo: true } });
export const getEquipmentById = (id: number) => prisma.equipment.findUnique({ where: { id }, include: { assignedTo: true } });
export const updateEquipment = (id: number, data: Partial<Equipment>) => prisma.equipment.update({ where: { id }, data });
export const deleteEquipment = (id: number) => prisma.equipment.delete({ where: { id } });
export const getEquipmentsByUserId = (userId: number) => prisma.equipment.findMany({ where: { userId } });
