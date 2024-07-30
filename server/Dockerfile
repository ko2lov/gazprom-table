# Base image
FROM node:14

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose the port
EXPOSE 5001

# Start the server
CMD ["node", "server.js"]