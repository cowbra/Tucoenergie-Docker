# Specify the image that will be used as a base for our first stage of the build
# Here it's a lightweight version of Node.js optimized for running in containers
FROM node:18.13.0-alpine as builder

# Working directory of the container
WORKDIR /app

# Copy this file from the local directory to the working directory of the container
COPY ./package.json ./

# Run the 'npm i' command inside the container  
# --> install all the dependencies listed in the package.json file
RUN npm i

# Manually installs a dependency that is not listed in the package.json file
RUN npm install axios

# Copy the entire local directory to the working directory of the container
COPY . .

# Change the ownership of all the files and folders in the working directory
RUN chown -R node:node .

# set the 'node' user as the default user for the container
USER node

# give executable permissions to the react-scripts binary
RUN chmod a+x ./node_modules/.bin/react-scripts

# build the React application inside the container
RUN npm run build







# specify the base image used for the second stage of the build process
FROM nginx

# Expose the port 3000 to the host machine
EXPOSE 3000

# copy the 'default.conf' file from the local directory to the Nginx configuration directory inside the container
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# copy the build artifacts from the first stage of the multi-stage build process to the second stage
COPY --from=builder /app/build /usr/share/nginx/html
