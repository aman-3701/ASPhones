# Stage 1: Build the Vite React App
FROM node:18-alpine AS builder

# Install pnpm
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy dependency files first for cache efficiency
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy source files
COPY . .

# Build the Vite project
RUN pnpm run build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine

# Clean default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Use safer non-root user (nginx runs fine with this)
USER nginx

# Expose default port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]





