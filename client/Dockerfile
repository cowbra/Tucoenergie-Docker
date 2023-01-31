FROM node:18.13.0-alpine as builder
WORKDIR /app
COPY ./package.json ./
RUN npm i
RUN npm install axios
COPY . .
RUN chown -R node:node .
USER node
RUN chmod a+x ./node_modules/.bin/react-scripts
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
