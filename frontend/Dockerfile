# Stage 1: Build the Vite React App
FROM node:18-alpine AS vite-app

# Install pnpm globally
RUN npm install -g pnpm

WORKDIR /app/mon2

# Copy only package.json and pnpm-lock.yaml
COPY mon2/package.json mon2/pnpm-lock.yaml ./

# Install dependencies with pnpm
RUN pnpm install

# Copy the rest of the app
COPY mon2/ .

# Build the Vite app
RUN pnpm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=vite-app /app/mon2/dist /usr/share/nginx/html

EXPOSE 5000

CMD ["nginx", "-g", "daemon off;"]
