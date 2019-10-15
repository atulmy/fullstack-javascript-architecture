FROM node:10
RUN mkdir -p /user/src/app
WORKDIR /user/src/app
COPY ./package*.json ./
RUN npm install --quiet
COPY . ./
RUN npm run build
EXPOSE 3000
ENTRYPOINT ["npm", "run", "start:prod"]
