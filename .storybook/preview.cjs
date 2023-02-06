export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
  html: {
    prettier: {
      printWidth: 80,
      tabWidth: 2,
      semi: false,
      singleQuote: true,
      useTabs: false,
      quoteProps: 'as-needed',
      jsxSingleQuote: false,
      trailingComma: 'all',
      bracketSpacing: true,
      bracketSameLine: false,
      arrowParens: 'always',
      endOfLine: 'lf',
      embeddedLanguageFormatting: 'auto',
      htmlWhitespaceSensitivity: 'strict',
    },
  },
}
