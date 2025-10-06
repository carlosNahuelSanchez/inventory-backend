import { createUser, findUserByEmail } from '../repositories/user.repository';
import { hashPassword, comparePassword } from '../helpers/password.helper';
import { generateToken } from '../helpers/jwt.helper';

export const registerUser = async (data: any) => {
  const existing = await findUserByEmail(data.email);
  if (existing) throw { status: 400, message: 'Email ya registrado' };
  const hashed = await hashPassword(data.password);
  const user = await createUser({ ...data, password: hashed });
  return user;
};

export const loginUser = async (email: string, password: string) => {
  const user = await findUserByEmail(email);
  if (!user) throw { status: 400, message: 'Credenciales inválidas' };
  const valid = await comparePassword(password, user.password);
  if (!valid) throw { status: 400, message: 'Credenciales inválidas' };
  const token = generateToken(user);
  return { token, user };
};
