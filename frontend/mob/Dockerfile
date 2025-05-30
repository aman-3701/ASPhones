# Step 1: Build the React app using Node
FROM node:18-alpine AS builder

WORKDIR /app

# Copy dependencies and install them
COPY package.json package-lock.json ./
RUN pnpm ci

# Copy the rest of your source code
COPY . .

# Build the Vite project
RUN pnpm run build

# Step 2: Serve with nginx
FROM nginx:stable-alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from previous step
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
