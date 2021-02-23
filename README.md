# eslint-config-cit-yuuu

yuuu eslint 代码规范

# 使用手册

---

##### 1.使用内置的规则配置

    使用如下命令安装依赖

`npm install -D eslint babel-eslint eslint-config-yuuu`

在你的项目的根目录下创建一个 .eslintrc.js 文件，并将以下内容复制进去：

```JavaScript
module.exports = {
  extends: [
    'yuuu',
  ],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
  },
  rules: {
    // 咱们自定义规则
    // ...
  },
};
```

##### 2. react

    使用如下命令安装依赖

`npm install -D eslint babel-eslint eslint-plugin-react eslint-config-yuuu`

在你的项目的根目录下创建一个 .eslintrc.js 文件，并将以下内容复制进去：

```JavaScript
module.exports = {
  extends: [
    'yuuu',
    'yuuu/react',
  ],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
  },
  rules: {
    // 咱们自定义规则
    // ...
  },
};
```

##### 3. vue

    使用如下命令安装依赖

`npm install -D eslint babel-eslint vue-eslint-parser eslint-plugin-vue eslint-config-yuuu`

在你的项目的根目录下创建一个 .eslintrc.js 文件，并将以下内容复制进去：

```JavaScript
module.exports = {
  extends: [
    'yuuu',
    'yuuu/vue',
  ],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
  },
  rules: {
    // 咱们自定义规则
    // ...
  },
};
```

##### 4. TypeScript

    使用如下命令安装依赖

`npm install -D typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-yuuu`

在你的项目的根目录下创建一个 .eslintrc.js 文件，并将以下内容复制进去：

```JavaScript
module.exports = {
  extends: [
    'yuuu',
    'yuuu/typescript',
  ],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
  },
  rules: {
    // 咱们自定义规则
    // ...
  },
};
```

##### 5. TypeScript React

    使用如下命令安装依赖

`npm install -D typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-config-yuuu`

在你的项目的根目录下创建一个 .eslintrc.js 文件，并将以下内容复制进去：

```JavaScript
module.exports = {
  extends: [
    'yuuu',
    'yuuu/react',
    'yuuu/typescript',
  ],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
  },
  rules: {
    // 咱们自定义规则
    // ...
  },
};
```

# 搭配起来更好

#### prettier 配置

可以参考下载依赖后，node_modules/eslint-config-yuuu 下的文件
