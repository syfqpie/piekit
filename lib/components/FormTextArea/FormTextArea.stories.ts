import type { Meta, StoryObj } from '@storybook/react'
import FormTextArea from './FormTextArea'

const meta: Meta<typeof FormTextArea> = {
	title: 'Components/FormTextArea',
	component: FormTextArea,
	args: { },
	argTypes: { },
}

export default meta

type Story = StoryObj<typeof FormTextArea>

export const Default: Story = {
	args: {
		testId: 'default-form',
		label: 'Address',
		placeholder: 'Enter address',
	},
}

export const Disabled: Story = {
	args: {
		testId: 'disabled-form',
		label: 'Address',
		placeholder: 'Enter address',
		disabled: true,
	},
}

export const ErrorState: Story = {
	args: {
		testId: 'error-form',
		label: 'Address',
		placeholder: 'Enter address',
		hasError: true,
		errorMessages: ['Field required'],
	},
}
