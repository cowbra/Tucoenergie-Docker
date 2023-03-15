# Specify the image that will be used as a base for our first stage of the build
# Here it's a lightweight version of Node.js optimized for running in containers
FROM node:18.13.0-alpine

# Working directory of the container
WORKDIR /app

# copy this file from the local directory to the working directory of the container
COPY ./package.json ./

# run the 'npm i' command inside the container  
# --> install all the dependencies listed in the package.json file
RUN npm i

# manually installs a dependency that is not listed in the package.json file
RUN npm install morgan

# Copy the entire local directory to the working directory of the container
COPY . .

# Change the ownership of all the files and folders in the working directory
RUN chown -R node:node .




# set the 'node' user as the default user for the container
USER node

# Expose the port 5000 to the host machine
EXPOSE 5000

# specify the default command to run when the container is started from the built image
# --> start the React development server
CMD ["npm","run","start"]