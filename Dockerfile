# Imagen base de Node.js
FROM node:18-alpine AS build

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del código
COPY . .
RUN npm run build

# Servir los archivos estáticos con nginx
FROM nginx:alpine

# Copia los archivos construidos por el contenedor de construcción
COPY --from=build /app/dist /usr/share/nginx/html

# Indica el puerto que usa la app
EXPOSE 80

# Proceso principal del contenedor
CMD ["nginx", "-g", "daemon off;"]