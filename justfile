default: dev

dev:
  yarn start --no-open

build:
  sh build.sh

update:
  yarn upgrade --latest
