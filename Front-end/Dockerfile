# Étape 1 : Utilisez une image Node.js pour construire l'application Vue.js
FROM node:18-alpine as Front-end

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app/Front-end

# Copiez package.json et package-lock.json dans le conteneur
COPY package*.json ./

# Installez les dépendances du projet
RUN npm ci

# Copiez tous les fichiers du projet dans le conteneur
COPY . .

# Installez Vite localement dans le projet
RUN npm install vite

# Compilez l'application Vue.js pour la production
CMD ["npm", "run", "dev"]

