import type { OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'
import antfu, { GLOB_SRC, GLOB_VUE } from '@antfu/eslint-config'

export * from '@antfu/eslint-config'

const defaultOptions: OptionsConfig = {
  unicorn: {
    allRecommended: true,
  },
  test: {
    overrides: {
      'test/prefer-lowercase-title': [
        'error',
        { lowercaseFirstCharacterOnly: false },
      ],
    },
  },
}

const jannchieRules: TypedFlatConfigItem[] = [
  {
    files: [GLOB_SRC, GLOB_VUE],
    name: 'jannchie/src',
    rules: {
      'curly': ['error', 'multi-line'],
      'import/no-mutable-exports': 'off',
      '@stylistic/brace-style': [
        'error',
        'stroustrup',
        { allowSingleLine: false },
      ],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/array-element-newline': [
        'error',
        {
          ArrayExpression: 'consistent',
          ArrayPattern: { minItems: 3 },
        },
      ],
    },
  },
]

const jannchieVueRules: TypedFlatConfigItem[] = [
  {
    files: [GLOB_VUE],
    name: 'jannchie/vue',
    rules: {
      'vue/html-button-has-type': 'error',
      'vue/mustache-interpolation-spacing': ['error', 'always'],
      'vue/no-multi-spaces': ['error'],
      'vue/max-attributes-per-line': [
        'error',
        {
          multiline: {
            max: 1,
          },
        },
      ],
    },
  },
]

export default function jannchie(...parameters: Parameters<typeof antfu>): ReturnType<typeof antfu> {
  const options = parameters[0]
  const userConfigs = parameters.slice(1).filter(d => !!d)
  const finalOptions = { ...defaultOptions, ...options }
  return antfu(finalOptions, jannchieRules, finalOptions.vue ? jannchieVueRules : [], ...userConfigs)
}
