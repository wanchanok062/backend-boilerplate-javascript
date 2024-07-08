import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: { sourceType: "module" },
  },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  {
    rules: {
          'no-var': 'error',
          'no-multiple-empty-lines': ['error', { max: 1 }],
          'semi': ['error', 'always'],
          'prefer-const': 'error',
          'arrow-spacing': ['error', { 'before': true, 'after': true }],
          'no-unused-vars': ['error', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }],
          'object-shorthand': ['error', 'always'],
          'prefer-template': 'error',
    }
  }
];
