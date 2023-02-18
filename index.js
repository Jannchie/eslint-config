module.exports = {
  rules: {
    indent: ['warn', 2, { SwitchCase: 1 }],
    '@typescript-eslint/indent': ['warn', 2, { SwitchCase: 1 }],
    'jsx-quotes': ['warn', 'prefer-double'],
    '@typescript-eslint/no-invalid-void-type': 'off',
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': 'warn',
    'comma-dangle': ['warn', 'always-multiline'],
    '@typescript-eslint/comma-dangle': ['warn', 'always-multiline'],
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-constant-condition': 'warn',
    'react/self-closing-comp': ['warn', { component: true, html: true }],
    'react/jsx-curly-spacing': ['warn', {
      when: 'always',
      children: true,
      attributes: {
        allowMultiline: false,
        when: 'never',
      },
      spacing: {
        objectLiterals: 'never',
      },
    }],
    'react/jsx-sort-props': [
      'warn',
      {
        noSortAlphabetically: true,
        callbacksLast: true,
        reservedFirst: true,
        shorthandFirst: true,
      },
    ],
  },
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
  ],
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'standard-with-typescript',
    'plugin:jsx-a11y/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
}
