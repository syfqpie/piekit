import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import FormSelect from './FormSelect'

const meta: Meta<typeof FormSelect> = {
	title: 'Components/FormSelect',
	component: FormSelect,
	args: {
		options: [
			{ label: 'Option 1', value: 'option1' },
			{ label: 'Option 2', value: 'option2' },
			{ label: 'Option 3', value: 'option3' },
		],
	},
	argTypes: {
		disabled: {
			name: 'Disabled',
			control: 'boolean',
		},
		errorMessages: {
			name: 'Error messages',
			control: 'object',
		},
		hasError: {
			name: 'Has error',
			control: 'boolean',
		},
		label: {
			name: 'Label',
			control: 'text',
		},
		placeholder: {
			name: 'Placeholder',
			control: 'text',
		},
		testId: {
			name: 'Test automation tag',
			control: 'text',
		},
	},
}

export default meta

type Story = StoryObj<typeof FormSelect>

export const BasicUsage: Story = {
	args: {
		label: 'Fruit',
		placeholder: 'Select fruit',
	},
	render: (args) => {
		// eslint-disable-next-line
		const [value, setValue] = useState('option1')

		return (
			<div>
				<FormSelect
					{...args}
					value={value}
					onChange={(val) => {
						if (typeof val === 'string') { setValue(val) }
					}} />
				p {value}
			</div>
		)
	},
}

export const LabelOnly: Story = {
	args: {
		label: 'Fruit',
	},
}

export const PlaceholderOnly: Story = {
	args: {
		placeholder: 'Select fruit',
	},
}

export const Disabled: Story = {
	args: {
		label: 'Fruit',
		placeholder: 'Select fruit',
		disabled: true,
	},
}

export const ErrorStateWithoutMessage: Story = {
	args: {
		label: 'Fruit',
		placeholder: 'Select fruit',
		hasError: true,
	},
}

export const ErrorStateWithMessage: Story = {
	args: {
		label: 'Fruit',
		placeholder: 'Select fruit',
		hasError: true,
		errorMessages: ['Field required'],
	},
}

export const WithGroupClassName: Story = {
	args: {
		className: '!bg-gray-600',
		groupClassName: 'bg-blue-400/30 p-4 rounded-md',
		label: 'Fruit',
		placeholder: 'Select fruit',
	},
}

export const WithTA: Story = {
	args: {
		testId: 'select-form-ta',
		label: 'Fruit',
		placeholder: 'Select fruit',
		hasError: true,
		errorMessages: ['Field required'],
	},
}
