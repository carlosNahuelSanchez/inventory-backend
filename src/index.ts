import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import equipmentRoutes from './routes/equipment.routes';
import { errorHandler } from './utils/errorHandler';

dotenv.config(); // <- importante que esté aquí

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/equipments', equipmentRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
