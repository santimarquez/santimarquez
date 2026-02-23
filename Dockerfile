# Build stage
FROM node:lts-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
ENV ASTRO_TELEMETRY_DISABLED=1
RUN npm run build

# Runtime stage (Node server for hybrid output + /api/contact)
FROM node:lts-alpine AS runtime
WORKDIR /app
ENV HOST=0.0.0.0
ENV PORT=80
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./
EXPOSE 80
CMD ["node", "./dist/server/entry.mjs"]
