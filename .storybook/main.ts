import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
	stories: [
		'../docs/*.mdx',
		'../lib/**/*.mdx',
		'../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)',
	],
	addons: [
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
	],
	framework: {
		'name': '@storybook/react-vite',
		'options': {},
	},
	staticDirs: [
		'../public',
	],
}

export default config
