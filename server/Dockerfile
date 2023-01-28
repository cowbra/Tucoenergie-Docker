FROM node:18.13.0-alpine
WORKDIR /app
COPY ./package.json ./
RUN npm i
RUN npm install morgan
COPY . .
RUN chown -R node:node .
EXPOSE 5001
USER node
CMD ["npm","run","start"]