# Build stage
FROM node:lts-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
ENV ASTRO_TELEMETRY_DISABLED=1
RUN npm run build

# Runtime stage
FROM nginx:alpine AS runtime
COPY --from=build /app/dist /usr/share/nginx/html
RUN mkdir -p /usr/share/nginx/html/cv
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
