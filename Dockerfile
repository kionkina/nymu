FROM node:10.15.1

WORKDIR /usr/src/app

COPY . .

RUN npm install && npm run build

EXPOSE 4000
