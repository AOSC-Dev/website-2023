---
categories:
  - news
date: '2017-04-18'
important: true
title: 'AOSA-2017-0034: OpenSSH in Tarballs Shipped Identical Host Keys'
url: /news/2017/04/18/aosa-2017-0034-openssh-in-tarballs-shipped-identical-host-keys.html
---


**This is an issue of great emergency, please update your system with the newest `openssh` package to workaround this security vulnerability!**

In our traditional way of generating AOSC OS release tarballs, SSH Daemon host keys were generated only once across any AOSC OS install because the tarballs were built from a single `stub` tarball, then to a Base variant - which already contains a copy of OpenSSH (with keys generated) - then all other variants were generated from the Base tarball with extra sets of packages. The result was - due to our ignorance - that all SSH Daemon host keys are generated only once, a great security threat to all AOSC OS users with their SSH Daemon or `sshd.service` enabled.

To workaround this for all existing users, (once again) please update your system with the latest `openssh` package, if you see the following message when installing the update...

```
Regenerating SSH Keys for AOSA-2017-0034...
removed '/etc/ssh/ssh_host_dsa_key'
removed '/etc/ssh/ssh_host_dsa_key.pub'
removed '/etc/ssh/ssh_host_ecdsa_key'
removed '/etc/ssh/ssh_host_ecdsa_key.pub'
removed '/etc/ssh/ssh_host_ed25519_key'
removed '/etc/ssh/ssh_host_ed25519_key.pub'
removed '/etc/ssh/ssh_host_rsa_key'
ssh-keygen: generating new host keys: RSA DSA ECDSA ED25519
```

Then your SSH Daemon host keys are regenerated, and they are expected to be unique across any device. You would not need to restart your `sshd.service`, but when clients connect to your device, they may receive a warning...

```
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the ECDSA key sent by the remote host is
<ECSDA key here>
Please contact your system administrator.
```

Please remove the line (or inform users of your AOSC OS host with SSH enabled to do so) from your `~/.ssh/known_host` file containing the key described above - another method is to identify the host you are attempting to connect to, and remove the line containing the host.

Updates to `openssh` are now available for `amd64`, `arm64`, `armel`, `mipsel`, `powerpc`, and `ppc64`.