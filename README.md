# dtils

工具包

# 仓库注意点

1. 本仓库会同时 push 到 github 和码云, 使用的方法是修改`.git/config`

```txt
[remote "origin"]
	url = git@github.com:buledong/dtils.git
	url = git@gitee.com:buledong/dtils.git
	fetch = +refs/heads/*:refs/remotes/origin/*
```
