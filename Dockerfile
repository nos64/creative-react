FROM node:12-alpine
COPY . /app
WORKDIR /app
CMD node /app/index.js