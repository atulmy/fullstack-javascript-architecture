FROM node:10
RUN mkdir -p /user/src/app
WORKDIR /user/src/app
RUN npm install -g serve
COPY ./src/. ./build
EXPOSE 3000
CMD ["serve", "-p", "3000", "-s", "./build"]
