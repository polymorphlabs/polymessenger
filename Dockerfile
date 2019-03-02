FROM node

WORKDIR usr/src/app


COPY package.json .
COPY package-lock.json .
COPY .env .

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "yarn", "start" ]