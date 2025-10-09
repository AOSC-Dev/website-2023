FROM node:lts AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run generate

FROM nginx:1.24.0

COPY --from=builder /app/.output/public /usr/share/nginx/html
COPY deploy/nginx-example.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
