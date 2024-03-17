#!/bin/bash

rm -rf website*
pnpm run build
zip -r website.zip ../website/
scp website.zip aosc@20.115.186.5:/home/aosc/web/