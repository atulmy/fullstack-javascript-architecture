FROM node:10
RUN mkdir -p /user/src/app
WORKDIR /user/src/app
COPY package*.json ./
RUN npm install -g serve
COPY . ./
EXPOSE 3000
CMD ["serve", "-p", "3000", "-s", "./build"]
