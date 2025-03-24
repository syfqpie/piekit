import type { Meta, StoryObj } from '@storybook/react'
import FormInput from './FormInput'

const meta: Meta<typeof FormInput> = {
	title: 'Components/FormInput',
	component: FormInput,
	args: { },
	argTypes: { },
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
