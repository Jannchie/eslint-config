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
    name: 'jannchie/src',
    rules: {
      'curly': ['error', 'multi-line'],
      'import/no-mutable-exports': 'off',
      '@stylistic/brace-style': ['error', 'stroustrup', { allowSingleLine: false }],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/array-element-newline': ['error', {
        ArrayExpression: 'consistent',
        ArrayPattern: { minItems: 3 },
      }],
    },
  },
]
export default function (...params: Parameters<typeof antfu>) {
  const paramsObj = params.reduce((acc, cur) => {
    return { ...acc, ...cur }
  }, {})
  return antfu({ ...defaultOptions, ...paramsObj }, jannchieRules)
};
