# Stage 1: Build the Vite React App
FROM node:18-alpine AS builder

# At the top of the Dockerfile
WORKDIR /app

COPY mon2/package*.json ./ 
RUN npm install -g pnpm && pnpm install
COPY mon2/. .

# Later lines remain the same



RUN pnpm run build


FROM nginx:stable-alpine


RUN rm -rf /usr/share/nginx/html/*


COPY --from=builder /app/dist /usr/share/nginx/html

RUN chmod -R 755 /usr/share/nginx/html

# Copy custom entrypoint
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Set env-injecting entrypoint
ENTRYPOINT ["/entrypoint.sh"]

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
