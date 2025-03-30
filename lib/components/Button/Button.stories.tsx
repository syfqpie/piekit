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

export const Variant: Story = {
	render: (args) => {
		return (
			<div style={{ display: 'flex', gap: '10px' }}>
				<Button {...args} variant='primary'>Primary</Button>
				<Button {...args} variant='success'>Success</Button>
				<Button {...args} variant='error'>Error</Button>
			</div>
		)
	},
}

export const Size: Story = {
	render: (args) => {
		return (
			<div style={{ display: 'flex', gap: '10px', 'alignItems': 'center' }}>
				<Button {...args} size='xs'>Extra small</Button>
				<Button {...args} size='sm'>Small</Button>
				<Button {...args} size='md'>Medium</Button>
				<Button {...args} size='lg'>Large</Button>
			</div>
		)
	},
}

export const Outline: Story = {
	render: (args) => {
		return (
			<div style={{ display: 'flex', gap: '10px', 'alignItems': 'center' }}>
				<Button {...args} appearance='outline' variant='primary'>Primary</Button>
				<Button {...args} appearance='outline' variant='success'>Success</Button>
				<Button {...args} appearance='outline' variant='error'>Error</Button>
			</div>
		)
	},
}

export const Disabled: Story = {
	render: (args) => {
		return (
			<div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
				<Button {...args} disabled variant='primary'>Primary</Button>
				<Button {...args} disabled variant='success'>Success</Button>
				<Button {...args} disabled variant='error'>Error</Button>

				<Button {...args} appearance='outline' disabled variant='primary'> Outline Primary</Button>
				<Button {...args} appearance='outline' disabled variant='success'> Outline Success</Button>
				<Button {...args} appearance='outline' disabled variant='error'> Outline Error</Button>
			</div>
		)
	},
}

export const Full: Story = {
	render: (args) => {
		return (
			<div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
				<Button {...args} full>Primary</Button>
				<Button {...args} appearance='outline' full>Outline</Button>
			</div>
		)
	},
}

export const Alignment: Story = {
	render: (args) => {
		return (
			<div style={{ display: 'flex', gap: '10px', flexDirection: 'column'  }}>
				<Button {...args} alignment='start'>Start</Button>
				<Button {...args} alignment='center'>Center</Button>
				<Button {...args} alignment='end'>End</Button>
			</div>
		)
	},
}
