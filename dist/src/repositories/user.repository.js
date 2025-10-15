"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserById = exports.findUserByEmail = exports.createUser = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const createUser = (data) => prisma_1.default.user.create({ data });
exports.createUser = createUser;
const findUserByEmail = (email) => prisma_1.default.user.findUnique({ where: { email } });
exports.findUserByEmail = findUserByEmail;
const findUserById = (id) => prisma_1.default.user.findUnique({ where: { id } });
exports.findUserById = findUserById;
