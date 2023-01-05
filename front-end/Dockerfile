FROM node:12-alpine

WORKDIR /app

#To avoid using local node_modules and install all in container
COPY package*.json /app/ 

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]