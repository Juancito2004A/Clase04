FROM node:20-alpine AS build

WORKDIR /app
ARG NG_APP_API_URL=http://localhost:3011

COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN sed -i "s#http://localhost:3011#${NG_APP_API_URL}#g" src/environments/environment.ts
RUN npm run build

FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

EXPOSE 80
