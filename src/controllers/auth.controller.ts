import { Request, Response } from 'express';
import * as service from '../services/auth.service';

export const register = async (req: Request, res: Response) => {
  try {
    const user = await service.registerUser(req.body);
    res.status(201).json(user);
  } catch (err: any) {
    res.status(err.status || 500).json({ message: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const data = await service.loginUser(req.body.email, req.body.password);
    res.json(data);
  } catch (err: any) {
    res.status(err.status || 500).json({ message: err.message });
  }
};
