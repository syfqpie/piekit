import type { Meta, StoryObj } from '@storybook/react'
import FormInput from './FormInput'

const meta: Meta<typeof FormInput> = {
	title: 'Components/FormInput',
	component: FormInput,
	args: { },
	argTypes: {
		disabled: {
			name: 'Disabled',
			description: 'Set input disabled state',
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
			description: 'Set input error state',
			control: 'boolean',
		},
		errorMessages: {
			name: 'Error messages',
			description: 'Set input error state',
			control: 'object',
		},
	},
}

export default meta

type Story = StoryObj<typeof FormInput>

export const Default: Story = {
	args: {
		testId: 'default-form',
		label: 'Name',
		placeholder: 'Enter name',
	},
}

export const Disabled: Story = {
	args: {
		testId: 'disabled-form',
		label: 'Name',
		placeholder: 'Enter name',
		disabled: true,
	},
}

export const ErrorState: Story = {
	args: {
		testId: 'error-form',
		label: 'Name',
		placeholder: 'Enter name',
		hasError: true,
		errorMessages: ['Field required'],
	},
}
