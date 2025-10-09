# syntax=docker.io/docker/dockerfile:1

FROM node:lts AS builder

WORKDIR /app

# 结合 deploy/nginx-example.conf 配置测试用
ENV PASTE_API=/api/paste

COPY package.json package-lock.json ./
RUN npm install

COPY --exclude=deploy . .
RUN npm run generate

FROM nginx:1.24.0

COPY --from=builder /app/.output/public /usr/share/nginx/html
COPY deploy/nginx-example.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
