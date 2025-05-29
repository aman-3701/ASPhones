# Stage 1: Build React app
FROM node:18 AS build

WORKDIR /myapp

# Copy package.json and package-lock.json to install dependencies
COPY frontend/package*.json ./
RUN npm install

# Copy all React source files
COPY frontend/ .

# Build React app for production
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:stable-alpine

# Copy built React files to nginx directory
COPY --from=build /myapp/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
