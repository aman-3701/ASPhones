# Stage 1: Build the Vite React App
FROM node:18-alpine AS vite-app

WORKDIR /app/mon2
COPY ./mon2 .  

RUN npm install && npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Remove default html directory
RUN rm -rf /usr/share/nginx/html && mkdir -p /usr/share/nginx/html

# Copy custom Nginx config (make sure this file exists)
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Copy built Vite assets
COPY --from=vite-app /app/mon2/dist /usr/share/nginx/html

EXPOSE 8888
# Start Nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]
