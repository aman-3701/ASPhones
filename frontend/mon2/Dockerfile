# Stage 1: Build Vite app
FROM node:18-alpine AS builder

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy only dependency files and install
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Copy rest of the app and build
COPY . .
RUN pnpm run build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine

# Remove default nginx html
RUN rm -rf /usr/share/nginx/html/*

# Copy build output
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
