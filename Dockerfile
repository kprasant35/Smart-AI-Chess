# base image
FROM node:alpine

# base image by default have some files, if we directly copy paste our file there could be issue
WORKDIR /app

# Here coping package.json so that rebuild could be reduced, because it hardly change if we make any new changes in code
COPY package.json ./

# instal dep
RUN npm install
COPY ./ ./

# commands
CMD ["npm", "start"]