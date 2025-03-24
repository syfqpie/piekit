import type { Meta, StoryObj } from '@storybook/react'
import FormTextArea from './FormTextArea'

const meta: Meta<typeof FormTextArea> = {
	title: 'Components/FormTextArea',
	component: FormTextArea,
	args: { },
	argTypes: {
		disabled: {
			name: 'Disabled',
			description: 'Set text area disabled state',
			control: 'boolean',
		},
		label: {
			name: 'Label',
			description: 'Form label',
			control: 'text',
		},
		placeholder: {
			name: 'Placeholder',
			description: 'Form placeholder',
			control: 'text',
		},
		testId: {
			name: 'Test ID',
			description: 'Component base test ID',
			control: 'text',
		},
		hasError: {
			name: 'Has error',
			description: 'Set text area error state',
			control: 'boolean',
		},
		errorMessages: {
			name: 'Error messages',
			description: 'Set text area error state',
			control: 'object',
		},
	},
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
