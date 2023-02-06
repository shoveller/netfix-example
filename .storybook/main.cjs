const viteTsconfig = require('vite-tsconfig-paths')
const tsconfigPaths = viteTsconfig.default

const { mergeConfig } = require('vite')

/**
 * @type {import("@storybook/core-common").StorybookConfig}
 */
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@whitespace/storybook-addon-html',
  ],
  framework: '@storybook/html',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
      // 로컬 베이스
      // base: 'renew101/storybook-static',
      // 프로덕션 베이스
      base: 'renew101-demo',
    })
  },
}
