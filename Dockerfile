FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ARG APP_NAME
ENV APP_NAME=${APP_NAME}

CMD ["npm", "start"] 