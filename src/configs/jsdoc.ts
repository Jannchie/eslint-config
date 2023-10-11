import { pluginJsdoc } from '../plugins'
import type { ConfigItem, OptionsStylistic } from '../types'

export function jsdoc(options: OptionsStylistic = {}): ConfigItem[] {
  const {
    stylistic = true,
  } = options

  return [
    {
      name: 'antfu:jsdoc',
      plugins: {
        jsdoc: pluginJsdoc,
      },
      rules: {
        'jsdoc/check-access': 'error',
        'jsdoc/check-param-names': 'error',
        'jsdoc/check-property-names': 'error',
        'jsdoc/check-types': 'error',
        'jsdoc/empty-tags': 'error',
        'jsdoc/implements-on-classes': 'error',
        'jsdoc/no-defaults': 'error',
        'jsdoc/no-multi-asterisks': 'error',
        'jsdoc/require-param-name': 'error',
        'jsdoc/require-property': 'error',
        'jsdoc/require-property-description': 'error',
        'jsdoc/require-property-name': 'error',
        'jsdoc/require-returns-check': 'error',
        'jsdoc/require-returns-description': 'error',
        'jsdoc/require-yields-check': 'error',

        ...stylistic
          ? {
              'jsdoc/check-alignment': 'error',
              'jsdoc/multiline-blocks': 'error',
            }
          : {},
      },
    },
  ]
}
