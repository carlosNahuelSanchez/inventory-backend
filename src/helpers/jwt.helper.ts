import jwt from 'jsonwebtoken';
import { User } from '@prisma/client';

export const generateToken = (user: User) => {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET!,
    { expiresIn: '8h' }
  );
};
