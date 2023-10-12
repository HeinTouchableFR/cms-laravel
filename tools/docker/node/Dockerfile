FROM node:20.8-bullseye-slim

RUN npm install -g npm@9.6.7
RUN npm install typescript -g
RUN mkdir -m 777 /.npm
RUN mkdir -m 777 /.yarn
RUN touch /.yarnrc && chmod 777 /.yarnrc
RUN npm install -g pnpm
