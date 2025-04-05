import type { Preview } from '@storybook/react'
import '../lib/styles.css'
import './docs-overrides.css'

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
}

export default preview
