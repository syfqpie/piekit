import type { Meta, StoryObj } from '@storybook/react'
import Card from './Card'

const meta: Meta<typeof Card> = {
	title: 'Components/Card',
	component: Card,
	args: { },
	argTypes: {
		testId: {
			name: 'Test automation tag',
			description: 'Test automation ID',
			control: 'text',
		},
	},
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
	render: (args) => {
		return (
			<div style={{ width: '10em' }}>
				<Card {...args}>
					<div>Hello world</div>
				</Card>
			</div>
		)
	},
}

export const WithTA: Story = {
	render: (args) => {
		return (
			<div style={{ width: '10em' }}>
				<Card {...args} testId='card-ta'>
					<div>Hello world</div>
				</Card>
			</div>
		)
	},
}
