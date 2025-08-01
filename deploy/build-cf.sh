# !/bin/bash

if [ "$CF_PAGES_BRANCH" == "website-nuxt" ]; then
    npm run generate
    ln -s .output/public website

elif [ "$CF_PAGES_BRANCH" == "staging" ]; then
    npm run build

else
    npm run dev
fi
