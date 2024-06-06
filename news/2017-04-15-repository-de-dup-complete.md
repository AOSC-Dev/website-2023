---
categories:
  - news
date: '2017-04-15'
important: false
title: Repository De-Dup Complete
url: /news/2017/04/15/repository-de-dup-complete.html
---


As mentioned in the [announcement](https://aosc.io/news/6347-repository-de-dup-to-take-place-next-week) last week, a repository de-duplication (removing old version s of all packages in the repository) is planned for this weekend - and now, the process is complete.

Ideally, as an user who regularly updates their copy of AOSC OS, they would/should not notice the changes taken place this weekend. But we do anticipate removals of some packages may lead to dependency issues, and that our bulk removal of files on the repository server may cause error on our mirror partners (due to `rsync`'s delete threshold, or `--max-delete` settings). 

If unfortunately you run into issue with updating or installing packages, please first try and switch to our source server...

```
sudo apt-gen-list -e "40-source"
```

And contact us at the IRC channel `#aosc` to report this incident - we will then try and get into contact with our mirror servers to solve the issue.