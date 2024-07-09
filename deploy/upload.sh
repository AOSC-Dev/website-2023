#!/bin/bash

rm -rf website*

# Generate news
pushd ./makeCategory
./build.sh
popd
pushd ./public
./makeCategory
popd

# Build website
pnpm i
pnpm run build
zip -r website.zip ../website/
scp website.zip aosc@20.115.186.5:/home/aosc/web/
