FROM node:16
RUN mkdir -p /Employee
WORKDIR /Employee
COPY . .
RUN npm install
WORKDIR /Employee/static
RUN npm install
RUN npm run build
#done in package.json CMD npm start >> /RED/public/console.log
WORKDIR ../
CMD npm start
