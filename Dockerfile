FROM node:20.9.0-bullseye-slim

WORKDIR /app

COPY server/. ./server
COPY clients/. ./clients
USER node

WORKDIR /app/server
RUN npm i

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "node", "server/server.js" ]