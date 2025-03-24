import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	args: {
		children: 'Click me',
		disabled: false,
		variant: 'primary',
		size: 'xs',
	},
	argTypes: {
		alignment: {
			name: 'Alignment',
			description: 'Set button alignment',
			control: 'radio',
			options: ['start', 'center', 'end'],
		},
		appearance: {
			name: 'Appearance',
			description: 'Set button appearance',
			control: 'radio', options: ['solid', 'outline'],
		},
		full: {
			name: 'Full',
			description: 'Set button to be full width or follow content width',
			control: 'boolean',
		},
		size: {
			name: 'Size',
			description: 'Set button size',
			control: 'radio', options: ['xs', 'sm', 'md', 'lg'],
		},
		variant: {
			name: 'Variant',
			description: 'Set button color variant',
			control: 'radio', options: ['primary', 'success', 'error'],
		},
		disabled: {
			name: 'Disabled',
			description: 'Set button disabled state',
			control: 'boolean',
		},
	},
}

export default meta

type Story = StoryObj<typeof Button>

export const ExtraSmallButton: Story = {
	args: { size: 'xs' },
}

export const Small: Story = {
	args: { size: 'sm' },
}

export const Medium: Story = {
	args: { size: 'md' },
}

export const Large: Story = {
	args: { size: 'lg' },
}

export const Primary: Story = {
	args: { variant: 'primary' },
}

export const Success: Story = {
	args: { size: 'xs', variant: 'success' },
}

export const Error: Story = {
	args: { size: 'xs', variant: 'error' },
}

export const PrimaryDisabled: Story = {
	args: { variant: 'primary', disabled: true },
}

export const SuccessDisabled: Story = {
	args: { size: 'xs', variant: 'success', disabled: true },
}

export const ErrorDisabled: Story = {
	args: { size: 'xs', variant: 'error', disabled: true },
}

export const OutlinePrimary: Story = {
	args: { appearance: 'outline', variant: 'primary' },
}

export const OutlineSuccess: Story = {
	args: { appearance: 'outline', size: 'xs', variant: 'success' },
}

export const OutlineError: Story = {
	args: { appearance: 'outline', size: 'xs', variant: 'error' },
}

export const OutlinePrimaryDisabled: Story = {
	args: { appearance: 'outline', variant: 'primary', disabled: true },
}

export const OutlineSuccessDisabled: Story = {
	args: { appearance: 'outline', size: 'xs', variant: 'success', disabled: true },
}

export const OutlineErrorDisabled: Story = {
	args: { appearance: 'outline', size: 'xs', variant: 'error', disabled: true },
}

export const Full: Story = {
	args: { full: true },
}

export const Start: Story = {
	args: { alignment: 'start' },
}

export const Center: Story = {
	args: { alignment: 'center' },
}

export const End: Story = {
	args: { alignment: 'end' },
}
