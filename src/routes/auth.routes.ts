import { Router } from 'express';
import { register, login } from '../controllers/auth.controller';
import { authenticate, authorize } from '../middlewares/auth.middleware';

const router = Router();

router.post('/login', login);
router.post('/register', authenticate, authorize(['admin']), register);

export default router;
