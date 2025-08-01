# !/bin/bash

if [ "$CF_PAGES_BRANCH" == "website-nuxt" ]; then
    npm run generate
    ln -s .output/public website

else
    npm run build
fi
