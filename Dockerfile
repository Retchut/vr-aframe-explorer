FROM node:18-alpine3.15 as build
WORKDIR /app/
COPY src/ ./src
COPY public ./public
COPY package.json package-lock.json index.html server.js ./
RUN npm install
RUN npm run build
EXPOSE 5173
CMD [ "npm", "run", "preview" ]