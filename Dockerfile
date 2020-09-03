FROM node:latest

MAINTAINER macnaer


WORKDIR /var/www
COPY . /var/www

RUN npm install

ENTRYPOINT ["npm", "start"]
