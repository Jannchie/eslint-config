import { pluginHooks, pluginNext, pluginReact, pluginStylistic } from 'src/plugins'
import tsParser from '@typescript-eslint/parser'
import { GLOB_JSX, GLOB_SRC, GLOB_TSX, GLOB_VUE } from '../globs'
import type { ConfigItem } from '../types'

export function jannchie(): ConfigItem[] {
  return [
    {
      files: [GLOB_VUE],
      name: 'jannchie:vue',
      rules: {
        'vue/max-attributes-per-line': ['error', {
          multiline: {
            max: 1,
          },
        }],
      },
    },
    {
      files: [GLOB_SRC, GLOB_VUE],
      name: 'jannchie:src',
      plugins: {
        style: pluginStylistic,
      },
      rules: {
        'curly': ['error', 'multi-line'],
        'import/no-mutable-exports': 'off',
        'style/brace-style': ['error', 'stroustrup', { allowSingleLine: false }],
      },
    },
    {
      files: [GLOB_JSX, GLOB_TSX],
      name: 'jannchie:react',
      plugins: {
        react: pluginReact,
      },
      rules: {
        ...pluginReact.configs['jsx-runtime'].rules,
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
    {
      files: [GLOB_SRC, GLOB_VUE],
      plugins: {
        '@next/next': pluginNext,
      },
      rules: {
        ...pluginNext.configs.recommended.rules,
        ...pluginNext.configs['core-web-vitals'].rules,
      },
    },
    {
      plugins: {
        'react-hooks': pluginHooks,
      },
      rules: pluginHooks.configs.recommended.rules,
    },
  ]
}
