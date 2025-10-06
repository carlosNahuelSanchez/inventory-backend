import prisma from '../config/prisma';
import { User } from '@prisma/client';

export const createUser = (data: Partial<User>) => prisma.user.create({ data });
export const findUserByEmail = (email: string) => prisma.user.findUnique({ where: { email } });
export const findUserById = (id: number) => prisma.user.findUnique({ where: { id } });
