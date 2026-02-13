import js from "@eslint/js"
import tseslint from "typescript-eslint"

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      ".contentlayer/**",
      "node_modules/**",
      "out/**",
      "artifacts/**",
      "public/**",
      "*.config.js",
      "*.config.ts",
      "*.config.mjs",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
]

export default eslintConfig
