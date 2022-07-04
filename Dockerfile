FROM node:18.4.0-alpine

RUN apk add --no-cache bash

WORKDIR /home/node/app

USER node

CMD npm install