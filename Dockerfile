FROM node:20.9.0-bullseye-slim

WORKDIR /home/node/app

COPY client /home/node/app/client/
COPY server /home/node/app/server/


WORKDIR /home/node/app/server

USER root
RUN npm i

EXPOSE 3000
CMD [ "node", "server.js" ]
