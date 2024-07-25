# Use the official Node.js image as a base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app for production
RUN npm run build

# Install a simple web server to serve the static files
RUN npm install -g serve

# Expose the port on which the app will run
EXPOSE 5000

# Set the command to run the web server
CMD ["serve", "-s", "build", "-l", "5000"]
