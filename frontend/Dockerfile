# Stage 1: Build the Vite React App
FROM node:18-alpine AS vite-app

WORKDIR /app/mon2
COPY ./mon2 .  

RUN npm install && npm run build


FROM nginx:alpine


RUN rm -rf /usr/share/nginx/html && mkdir -p /usr/share/nginx/html


COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=vite-app /app/mon2/dist /usr/share/nginx/html

EXPOSE 5000

ENTRYPOINT ["nginx", "-g", "daemon off;"]
