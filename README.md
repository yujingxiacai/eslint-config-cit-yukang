# eslint-config-cit-yuuu

yuuu eslint 代码规范

# 使用手册

---

##### 1.使用内置的规则配置

    使用如下命令安装依赖

`npm install -D eslint @babel/core @babel/eslint-parser eslint-config-yuuu`

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

`npm install -D eslint @babel/core @babel/eslint-parser eslint-plugin-react eslint-config-yuuu`

**注**：react 项目如有报@babel/preset-react 的错误，注意提前配置好.babelrc.js， 不然 jsx 解析会报错！！！

```JavaScript
module.exports = {
  presets: [
    [
      "@babel/preset-react",
      {
        development: process.env.BABEL_ENV === "development",
      },
    ],
  ],
};

```

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

`npm install -D eslint @babel/core @babel/eslint-parser vue-eslint-parser eslint-plugin-vue eslint-config-yuuu`

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

##### 6. 原生微信小程序

    使用如下命令安装依赖

`npm install -D eslint @babel/core @babel/eslint-parser eslint-config-yuuu`

在你的项目的根目录下创建一个 .eslintrc.js 文件，并将以下内容复制进去：

```JavaScript
module.exports = {
  extends: [
    'yuuu',
    'yuuu/minip_',
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
    // 如果小程序中还有一些全局变量报错，请在这里添加并设置为true即可！！！
  },
  rules: {
    // 咱们自定义规则
    // ...
  },
};
```

# 搭配起来更好

#### prettier 配置

可以参考下载依赖后当前工作空间 node_modules/eslint-config-yuuu 路径下的`.prettierrc.js`文件。复制到当前 workplace 跟目录下。

#### vscode 配置

可以参考下载依赖后当前工作空间 node_modules/eslint-config-yuuu 路径下的`.vscode`文件夹，可以 copy 到当前 workplace 根目录下。
