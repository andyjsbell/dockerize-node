FROM node:10
WORKDIR /usr/src/server

# install dependencies
COPY server/package*.json ./

RUN npm install

# copy our source
COPY server .

# open port
EXPOSE 8000

CMD ["node", "index.js"]

