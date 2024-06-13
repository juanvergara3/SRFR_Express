FROM node:18.17.1

COPY . /app/

WORKDIR /app

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
