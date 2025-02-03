import { FlatCompat } from "@eslint/eslintrc"

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: [
      "next",
      "next/typescript",
      "next/core-web-vitals",
      "prettier",
      "plugin:prettier/recommended",
    ],
  }),
]

export default eslintConfig
