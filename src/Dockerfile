FROM node:18-bullseye as SMAE_API

WORKDIR /usr/src/app

RUN npm --loglevel=error install -g npm@9.6.4

COPY --chown=1000:1000 package.json ./
COPY --chown=1000:1000 package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

CMD ["sh", "./run-api.sh"]
