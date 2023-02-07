const { mergeConfig } = require('vite');
const tsconfigPaths = require("vite-tsconfig-paths");

module.exports = {
	stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		{
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss'),
				},
			},
		},
	],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-vite',
	},
	features: {
		storyStoreV7: true,
	},
	async viteFinal(config) {
		return mergeConfig(config, {
			plugins: [tsconfigPaths.default()],
			resolve: {
				alias: {
					'./runtimeConfig': './runtimeConfig.browser',
				},
			},
		});
	},
};
