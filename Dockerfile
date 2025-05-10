FROM node:latest

WORKDIR /Clothing

COPY . .

RUN rm -rf node_modules 
RUN npm i

CMD ["npm", "run", "dev"]

EXPOSE 5002