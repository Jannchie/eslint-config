import type { ConfigItem } from '../types'
import { GLOB_JSX, GLOB_SRC, GLOB_TSX } from '../globs'
import { pluginHooks, pluginNext, pluginReact } from '../plugins'

export function react(): ConfigItem[] {
  return [
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
      files: [GLOB_SRC],
      plugins: {
        '@next/next': pluginNext,
      },
      rules: {
        ...pluginNext.configs.recommended.rules,
        ...pluginNext.configs['core-web-vitals'].rules,
      },
    },
    {
      files: [GLOB_SRC],
      plugins: {
        'react-hooks': pluginHooks,
      },
      rules: pluginHooks.configs.recommended.rules,
    },
  ]
}
