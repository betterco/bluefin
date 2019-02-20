FROM node:10-alpine

WORKDIR /bluefin

COPY . .

RUN apk add --no-cache bash

RUN apk add --no-cache git
RUN apk add postgresql-dev gcc musl-dev postgresql-client

RUN yarn install
