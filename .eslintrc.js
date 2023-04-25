module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:i18next/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "i18next",
    "react-hooks",
    "arttraf-eslint-fsd-plugin"
  ],
  "rules": {
    "react/jsx-indent": [2, 2],
    "indent": [2, 2],
    "react/react-in-jsx-scope": "off",
    "object-curly-spacing": ["error", "always"],
    "@typescript-eslint/ban-ts-comment": "warn",
    "no-undef": "off",
    "i18next/no-literal-string": [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: [
          'data-testid',
          "to",
          "name",
          "target",
          "justify",
          "align",
          "direction",
          "gap",
          "role",
          "as",
          "border"
        ]
      }
    ],
    "@typescript-eslint/no-var-requires": "off",
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "error", // Checks effect dependencies
    "react/display-name": "off",
    "arttraf-eslint-fsd-plugin/path-checker": ["error", { alias: "@" }]
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off'
      }
    }
  ]
};
