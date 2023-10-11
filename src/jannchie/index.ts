import { pluginStylistic } from 'src/plugins'
import { GLOB_SRC, GLOB_VUE } from '../globs'
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
      files: [GLOB_SRC],
      name: 'jannchie:src',
      plugins: {
        style: pluginStylistic,
      },
      rules: {
        'curly': ['error', 'multi-line'],
        'style/brace-style': ['error', 'stroustrup', { allowSingleLine: false }],
      },
    },
  ]
}
