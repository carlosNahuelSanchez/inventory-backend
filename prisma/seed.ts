import prisma from '../src/config/prisma';
import { hash } from 'bcrypt';

async function main() {
  const email = 'admin@formotex.com';
  const password = 'admin123';

  // Revisar si ya existe
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    console.log('Admin ya existe');
    return;
  }

  // Crear admin
  const hashedPassword = await hash(password, 10);
  const admin = await prisma.user.create({
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
    await prisma.$disconnect();
  });
