# Node utils


### 手动发包

1. 切换当前的源为 https://registry.npmjs.org/

   > yrm use npm

2. 登录

   > npm login

3. 发布 当报名为@your-name/your-package时，由于以@your-name开头，npm publish会默认发布为私有包，但是 npm 的私有包需要付费，所以需要发布为公共包。

   > npm publish --access=public
