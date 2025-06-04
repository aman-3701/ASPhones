# Stage 1: Build the Vite React App
FROM node:18-alpine AS vite-app


RUN npm install -g pnpm

WORKDIR /app


COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .


RUN pnpm run build

FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/*



COPY --from=vite-app /app/dist /usr/share/nginx/html


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
