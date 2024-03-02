FROM node AS prashanfrontend

WORKDIR /usr/src/Prashna

COPY . ./

RUN npm run build
RUN npm install -g serve
CMD serve -s build -l 3000

