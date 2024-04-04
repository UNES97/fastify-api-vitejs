FROM node:20.9.0-bullseye-slim

WORKDIR /home/node/app

COPY client /home/node/app/client/
COPY server /home/node/app/server/

USER root
WORKDIR /home/node/app/client/app
RUN npm install && npm run build

WORKDIR /home/node/app/server
RUN npm install

EXPOSE 3000
CMD [ "node", "server.js" ]
