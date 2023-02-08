module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "overrides": [
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
    "react/jsx-indent": [2, 2],
    "indent": [2, 2],
    "react/react-in-jsx-scope": "off",
    "object-curly-spacing": ["error", "always"],
    "@typescript-eslint/ban-ts-comment": "warn",
    "no-undef": "warn"
  }
};
