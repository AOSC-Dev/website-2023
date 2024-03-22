---
categories:
  - news
date: '2017-02-14'
important: true
title: Repository key expiration!
url: /news/2017/02/14/repository-key-expiration.html
---


Let us start with an apologize - we messed up. Starting with AOSC OS2 back in early 2014, the repositories for AOSC OS were signed with a GPG key - it was a time when we had no idea about longterm maintainership - thus no plan, nor anticipation for the expiration of this GPG key on Valentine's Day of 2017.

Although the problem has already been addressed for our source repository (with extra security enhancements), we do realize that some of you have already been running into issues trying to update your AOSC OS. It will be another two days before we could push out another batch of updates that addresses this issue directly - but you can still fix it yourself (albeit you can't even obtain an update for Apt now, as you can't update your system anyways). So here is how it goes:

First, obtain a copy of our new GPG key.

    wget https://repo.aosc.io/pubkeys/repo/20170214-2y.gpg

Then, remove the old key from the old storage.

    sudo rm -fv /etc/apt/trusted.gpg

And finally, add the new key to the Apt key storage.

    sudo apt-key add 20170214-2y.gpg

And you should be greeted with an "OK" message. Now, you are good to go again with the new keys on hand.

    sudo apt update

But at the time of posting, you may not be able to update your system via our various mirrors, this is because our new signature was not yet synchronised with the mirrors. To workaround this issue temporarily, use `apt-gen-list` and select our source server again - it might be slower in certain areas, but it gets the job done.

    sudo apt-gen-list -e "40-source"

Then, as usual.

    sudo apt update