module.exports = {
  overrides: [
    {
      files: ["*.test.ts"],
      extends: ["eslint:recommended"],
      env: {
        jest: true,
      },
      rules: {
        "react/react-in-jsx-scope": "off",
        "no-console": "off",
        eqeqeq: ["error", "always"],
      },
    },
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/prop-types": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/react-in-jsx-scope": "off",
    eqeqeq: ["error", "always"],
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
