FROM node:14

RUN apt-get update -y
WORKDIR /usr/src/f2lb-website
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]

