import * as repo from '../repositories/equipment.repository';

export const createEquipmentService = (data: any) => repo.createEquipment(data);
export const getAllEquipmentsService = () => repo.getAllEquipments();
export const getEquipmentService = (id: number) => repo.getEquipmentById(id);
export const updateEquipmentService = (id: number, data: any) => repo.updateEquipment(id, data);
export const deleteEquipmentService = (id: number) => repo.deleteEquipment(id);
export const getUserEquipmentsService = (userId: number) => repo.getEquipmentsByUserId(userId);
