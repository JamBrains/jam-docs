default: dev

dev:
  yarn start

build:
  sh build.sh

update:
  yarn upgrade --latest
