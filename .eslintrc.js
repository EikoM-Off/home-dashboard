module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],

  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: '@babel/eslint-parser'
  },

  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-v-model-argument': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-explicit-emits': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
