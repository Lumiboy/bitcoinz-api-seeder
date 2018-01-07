FROM node:8.9.4

WORKDIR /usr/local/src

COPY package.json .
RUN npm install

ADD . /usr/local/src

EXPOSE 3434
USER node

ENTRYPOINT ["node", "index.js"]
