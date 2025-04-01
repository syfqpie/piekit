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
			name: 'Test automation tag',
			description: 'Test automation ID',
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

export const LabelOnly: Story = {
	args: {
		label: 'Name',
	},
}

export const PlaceholderOnly: Story = {
	args: {
		placeholder: 'Enter name',
	},
}

export const Disabled: Story = {
	args: {
		label: 'Name',
		placeholder: 'Enter name',
		disabled: true,
	},
}

export const ErrorStateWithoutMessage: Story = {
	args: {
		label: 'Name',
		placeholder: 'Enter name',
		hasError: true,
	},
}

export const ErrorStateWithMessage: Story = {
	args: {
		label: 'Name',
		placeholder: 'Enter name',
		hasError: true,
		errorMessages: ['Field required'],
	},
}

export const WithGroupClassName: Story = {
	args: {
		className: '!bg-gray-600',
		groupClassName: 'bg-blue-400/30 p-4 rounded-md',
		label: 'Username',
		placeholder: 'Enter username',
	},
}

export const WithTA: Story = {
	args: {
		testId: 'name-form-ta',
		label: 'Name',
		placeholder: 'Enter name',
		hasError: true,
		errorMessages: ['Field required'],
	},
}
