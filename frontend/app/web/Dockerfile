FROM node:10
RUN mkdir -p /user/src/app
WORKDIR /user/src/app
COPY package*.json ./
RUN npm install --quiet
RUN npm install -g serve
COPY . ./
RUN npm run build
EXPOSE 5000
ENTRYPOINT ["serve", "-s", "build"]
