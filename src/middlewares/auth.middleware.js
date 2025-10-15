"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticate = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token)
        return res.status(401).json({ message: 'Token requerido' });
    try {
        const payload = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = payload;
        next();
    }
    catch {
        return res.status(401).json({ message: 'Token inválido' });
    }
};
exports.authenticate = authenticate;
const authorize = (roles) => (req, res, next) => {
    if (!roles.includes(req.user?.role || '')) {
        return res.status(403).json({ message: 'Acceso denegado' });
    }
    next();
};
exports.authorize = authorize;
