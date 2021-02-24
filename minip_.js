/**
 * 参考 AlloyTeam ESLint 规则
 * 可能稍作修改
 *
 */
module.exports = {
	parser: '@babel/eslint-parser',
	parserOptions: {
		ecmaVersion: 2019,
		// ECMAScript modules 模式
		sourceType: 'module',
		ecmaFeatures: {
			// 不允许 return 语句出现在 global 环境下
			globalReturn: false,
			// 开启全局 script 模式
			impliedStrict: true,
			jsx: true,
		},
		// 即使没有 babelrc 配置文件，也使用 babel-eslint 来解析
		requireConfigFile: false,
		// 仅允许 import export 语句出现在模块的顶层
		allowImportExportEverywhere: false,
	},
	env: {
		browser: true,
		node: true,
		commonjs: true,
		es6: true,
	},
	// 以当前目录为根目录，不再向上查找 .eslintrc.js
	rules: {
		/**
		 * 禁止在类之外的地方使用 this
		 * @reason 只允许在 class 中使用 this | 小程序除外
		 */
		'no-invalid-this': 'off',
	},
	globals: {
		__DEV__: true,
		__WECHAT__: true,
		__ALIPAY__: true,
		App: true,
		Page: true,
		Component: true,
		Behavior: true,
		wx: true,
		getApp: true,
		getCurrentPages: true,
	},
};
