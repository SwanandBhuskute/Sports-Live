FROM node:20-alpine

WORKDIR /app

COPY . /app

RUN npm install

COPY . .

EXPOSE 5173

CMD  [ "npm", "run", "dev" ]