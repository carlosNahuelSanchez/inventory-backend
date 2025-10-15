"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../src/config/prisma"));
const bcrypt_1 = require("bcrypt");
async function main() {
    const email = 'admin@formotex.com';
    const password = 'admin123';
    // Revisar si ya existe
    const existing = await prisma_1.default.user.findUnique({ where: { email } });
    if (existing) {
        console.log('Admin ya existe');
        return;
    }
    // Crear admin
    const hashedPassword = await (0, bcrypt_1.hash)(password, 10);
    const admin = await prisma_1.default.user.create({
        data: {
            name: 'Admin Formotex',
            email,
            password: hashedPassword,
            role: 'admin'
        }
    });
    console.log('Admin creado:', admin);
}
main()
    .catch((e) => console.error(e))
    .finally(async () => {
    await prisma_1.default.$disconnect();
});
