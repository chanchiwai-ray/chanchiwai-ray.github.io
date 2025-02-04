const config = {
  semi: false,
  singleQuote: false,
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  trailingComma: "es5",
  bracketSpacing: true,
  importOrder: ["^next(.*)$", "^@/(.*)$"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ["prettier-plugin-tailwindcss", "@trivago/prettier-plugin-sort-imports"],
}

export default config
