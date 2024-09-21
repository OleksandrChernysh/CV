import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
// import eslintPluginPrettier from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    rules: {
      // "prettier/prettier": "error",
      "computed-property-spacing": ["error", "never"],
      "template-curly-spacing": ["error", "never"],
      "space-in-parens": ["error", "never"],
      "space-before-function-paren": [
        "error",
        {
          anonymous: "always",
          named: "never",
          asyncArrow: "always",
        },
      ],
      "lines-around-comment": "off",
    },
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        sourceType: "module",
        ecmaVersion: 2020,
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  // eslintPluginPrettier.configs.recommended,
];
