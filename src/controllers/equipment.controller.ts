import { Request, Response } from 'express';
import * as service from '../services/equipment.service';

export const createEquipment = async (req: Request, res: Response) => {
  try {
    const equipment = await service.createEquipmentService(req.body);
    res.status(201).json(equipment);
  } catch (err: any) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

export const getEquipments = async (req: Request, res: Response) => {
  try {
    const equipments = req.user?.role === 'admin'
      ? await service.getAllEquipmentsService()
      : await service.getUserEquipmentsService(req.user!.id);
    res.json(equipments);
  } catch (err: any) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

export const getEquipment = async (req: Request, res: Response) => {
  try {
    const equipment = await service.getEquipmentService(Number(req.params.id));
    if (!equipment) return res.status(404).json({ message: 'Equipo no encontrado' });
    if (req.user!.role !== 'admin' && equipment.userId !== req.user!.id)
      return res.status(403).json({ message: 'Acceso denegado' });
    res.json(equipment);
  } catch (err: any) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

export const updateEquipment = async (req: Request, res: Response) => {
  try {
    const updated = await service.updateEquipmentService(Number(req.params.id), req.body);
    res.json(updated);
  } catch (err: any) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

export const deleteEquipment = async (req: Request, res: Response) => {
  try {
    await service.deleteEquipmentService(Number(req.params.id));
    res.status(204).send();
  } catch (err: any) {
    res.status(err.status || 500).json({ message: err.message });
  }
};
