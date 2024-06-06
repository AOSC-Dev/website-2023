---
categories:
  - news
date: '2016-09-29'
important: false
title: '"aosc-os-abbs" Repository Snapshots Migrated to Git bundles'
url: /news/2016/09/29/aosc-os-abbs-repository-snapshots-migrated-to-git-bundles.html
---


Sometime ago, to ease the new packagers to get a copy of our complete ABBS tree (in certain network conditions), we have created a snapshot of our repository once a week in tarball format. Now, to reduce the file size and increase the usability, we decided to use the `git bundle` format.

Now, you can find the snapshots at [here](https://repo.aosc.io/aosc-os-abbs-snapshots/).

And here is how to use them:

1. Grab the latest `.bundle` file, you can download it with your favorite download tool(s) (we won't blame you if you want to have a historical one...).

2. Verify the integrity of the bundle file using `git bundle verify <file>`, if the check passed, you can then proceed to step 3, if errors found or corrupted file found, well, you would need to move back to step 1 and test your luck again (If you are stuck on this step, please file an issue [here](https://github.com/AOSC-Dev/aosc-os-abbs/issues)... and please have a nice sleep while we look into it).

3. Once the file is checked, navigate to the folder you want to place the repository in and issue:

## Note

Commands shown below are optional, if you want to contribute to abbs tree. But if you have no direct access to this tree, please change the URL to your personal fork:

```bash
git clone <full_path_to_bundle_file> aosc-os-abbs # Name the folder whatever you like
git checkout -b staging

# Below are optional, if you want to contribute to abbs tree.
# But if you have no direct access to this tree, please change the URL
# to your personal fork.

git remote set-url origin "https://github.com/AOSC-Dev/aosc-os-abbs.git"  
git branch --set-upstream-to=origin/staging staging
```

Then wait for `git` to prepare the repository for you, this should normally take several seconds and you are all set and good to go.

Happy hacking, contributing and have a nice day!

— Zixing Liu ([liushuyu](https://github.com/liushuyu/))