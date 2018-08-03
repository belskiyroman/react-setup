module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "classes": true,
      "generators": true,
      "experimentalObjectRestSpread": true
    }
  },
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "react/prop-types": 0,
    "react/jsx-one-expression-per-line": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "no-script-url": 0,
    "no-console": 0,
    "import/no-cycle": 0,
    "camelcase": 0,
    "import/prefer-default-export": 0,
    "no-unused-vars": [1, { "args": "none" }],
    "no-multi-spaces": [2, { "exceptions": { "ImportDeclaration": true, "VariableDeclarator": true } }]
  }
}
;