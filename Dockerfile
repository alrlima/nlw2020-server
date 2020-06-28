FROM node:12.18-alpine AS nlw_server
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --silent
COPY . .
EXPOSE $CONTAINER_PORT
CMD ["npm", "start"]