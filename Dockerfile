# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1.3 AS base
WORKDIR /usr/src/app

# install with --production (exclude devDependencies)
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production

ENV NODE_ENV=production
# copy source code
COPY . .

# run the app
USER bun
EXPOSE 3000/tcp
CMD ["bun", "start"]
