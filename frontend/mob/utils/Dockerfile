
FROM node:18-alpine AS builder

RUN npm install -g pnpm

WORKDIR /app




COPY package.json pnpm-lock.yaml ./

RUN pnpm install


COPY . .


RUN pnpm run build


FROM nginx:stable-alpine


RUN rm -rf /usr/share/nginx/html/*


COPY --from=builder /app/dist /usr/share/nginx/html

USER nginx

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
