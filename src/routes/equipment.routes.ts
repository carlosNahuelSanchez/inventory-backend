import { Router } from 'express';
import * as controller from '../controllers/equipment.controller';
import { authenticate, authorize } from '../middlewares/auth.middleware';

const router = Router();

router.use(authenticate);

router.get('/', controller.getEquipments);
router.get('/:id', controller.getEquipment);
router.post('/', authorize(['admin']), controller.createEquipment);
router.put('/:id', controller.updateEquipment);
router.delete('/:id', authorize(['admin']), controller.deleteEquipment);

export default router;
