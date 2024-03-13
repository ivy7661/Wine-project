/* eslint-env node */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'standard'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.vue']
      }
    }
  },
  plugins: ['vue'],
  rules: {
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', 'never']
  },
  overrides: [
    {
      files: ['*.html'],
      processor: 'vue/.vue'
    }
  ]
};
