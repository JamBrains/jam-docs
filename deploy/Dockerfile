# Production image for docs.jamcha.in, built by .gitea/workflows/deploy.yml.
FROM node:24.22.1-bookworm-slim AS build
RUN apt-get update \
 && apt-get install --yes --no-install-recommends ca-certificates wget \
 && rm -rf /var/lib/apt/lists/*
WORKDIR /src
COPY package.json yarn.lock .yarnrc ./
RUN yarn install --frozen-lockfile
COPY . .
RUN bash build.sh
ARG DEPLOY_COMMIT
RUN test -n "$DEPLOY_COMMIT" \
 && sed "s/@DEPLOY_COMMIT@/$DEPLOY_COMMIT/" deploy/nginx.conf > /tmp/default.conf

FROM nginxinc/nginx-unprivileged:1-alpine
COPY --from=build /tmp/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /src/build /usr/share/nginx/html
