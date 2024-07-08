FROM node:21-slim

RUN apt update && apt install -y openssl procps

RUN npm install -g @nestjs/cli

WORKDIR /home/node/app

USER node

CMD tail -f /dev/null