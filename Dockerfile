FROM node:12.18-alpine AS nlw_server
# ENV NODE_ENV production
WORKDIR /usr/app
COPY package.json ./
RUN npm install --silent
COPY . .
# VOLUME [ "/db", "/uploads" ]
# USER node
EXPOSE $CONTAINER_PORT
CMD ["npm", "start"]