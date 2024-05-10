import antfu, { GLOB_SRC, GLOB_VUE, type OptionsConfig, type TypedFlatConfigItem } from '@antfu/eslint-config'

const defaultOptions: OptionsConfig = {
  vue: {
    overrides: {
      'vue/mustache-interpolation-spacing': ['error', 'always'],
      'vue/no-multi-spaces': ['error'],
      'vue/max-attributes-per-line': ['error', {
        multiline: {
          max: 1,
        },
      }],
    },
  },
}

const jannchieRules: TypedFlatConfigItem[] = [
  {
    files: [GLOB_SRC, GLOB_VUE],
    name: 'jannchie:src',
    rules: {
      'curly': ['error', 'multi-line'],
      'import/no-mutable-exports': 'off',
      'style/brace-style': ['error', 'stroustrup', { allowSingleLine: false }],
      '@stylistic/js/comma-dangle': ['error', 'always'],
    },
  },
]
export default function (...params: Parameters<typeof antfu>) {
  if (params.length === 0) {
    return antfu({ ...defaultOptions }, jannchieRules)
  }
  return antfu({ ...defaultOptions, ...params }, jannchieRules)
};
