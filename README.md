# Node utils

node 常用工具库

## Installation

```
Using yarn:

$ yarn add @zhangyp/node-utils
```

## API

### getPathFiles

获取指定路径下的所有文件，包含子文件

> getPathFiles(path, [excludeFolders])

引入版本 1.0.1

| 参数 |   类型    |   是否必选 | 默认值 |   说明     |
| ---- | ------   | -------- | ------ | ------ |
| path |  string      |     是      |   无     |   指定路径   |
| excludeFolders |  array  |    否    | 无       |   排除的文件夹     |

返回值
(Array): 返回指定路径下的所有文件。

## 其他

### Tag

```
git tag v1.0.0    # 打tag

git push origin --tags    # 推送tag到远程仓库

git tag -d v1.0.0  # 删除本地tag

git push origin :refs/tags/v1.0.0   # 删除远程tag
```


### 手动发包

1. 切换当前的源为 https://registry.npmjs.org/

   > yrm use npm

2. 登录

   > npm login

3. 发布 当报名为@your-name/your-package时，由于以@your-name开头，npm publish会默认发布为私有包，但是 npm 的私有包需要付费，所以需要发布为公共包。

   > npm publish --access=public

