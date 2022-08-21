module.exports = {
  env: {
    browser: true,
	commonjs: true,
    es2021: true,
	node: 1
  },
  extends: 'standard',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
	quotes: [2, "single", { "avoidEscape": true }],
	indent: off,
  }
}
