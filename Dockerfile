# 1. Imagen base oficial de Node
FROM node:20-alpine

# 2. Directorio de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiamos los archivos de dependencias
COPY package*.json ./

# 4. Instalamos dependencias
RUN npm install

# 5. Copiamos el resto del código del proyecto
COPY . .

# 6. Generamos Prisma client ANTES de compilar TS
RUN npx prisma generate

# 7. Compilamos el TypeScript (crea dist/)
RUN npm run build

# 8. Exponemos el puerto del backend
EXPOSE 3000

# 8. Comando por defecto al iniciar el contenedor
CMD ["npm", "run", "start"]
