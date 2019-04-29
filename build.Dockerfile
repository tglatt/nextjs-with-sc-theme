ARG NODE_VERSION=10.12.0

FROM node:${NODE_VERSION}

COPY . ./app
WORKDIR /app
RUN yarn
RUN yarn build

CMD [ "yarn", "start"]
