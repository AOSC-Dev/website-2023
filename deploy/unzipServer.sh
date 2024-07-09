#!/usr/bin/expect

set timeout 10
spawn ssh aosc@20.115.186.5
expect "aosc@vmportal001:~$"
send "cd /home/aosc/web\r"
send "rm -rf website\r"
send "unzip -x website.zip\r"
expect eof
