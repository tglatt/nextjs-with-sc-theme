ARG NODE_VERSION=10.12.0

FROM node:${NODE_VERSION} as builder

COPY . ./app
WORKDIR /app
RUN yarn
RUN yarn build-export

FROM nginx:1.13-alpine

COPY --from=builder /app/out /www

COPY ./nginx.conf /etc/nginx/nginx.conf