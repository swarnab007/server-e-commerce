# Base image
FROM node:20-alpine

# Create a working directory inside the container
WORKDIR /app

# Copy the requirements file into the container
COPY package.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose the port the app runs on
EXPOSE 8000

# Command to run the application
CMD ["npm", "start", "run"]