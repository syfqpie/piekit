import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Dropdown from './Dropdown'

const meta: Meta<typeof Dropdown> = {
	title: 'Components/Dropdown',
	component: Dropdown,
	args: {
		items: [
			{ label: 'Item 1', value: 'item_1' },
			{ label: 'Item 2', value: 'item_2' },
		],
		label: 'Select option',
		size: 'sm',
	},
	argTypes: {
		label: {
			name: 'Label',
			control: 'text',
		},
		items: {
			name: 'Items',
			control: 'object',
		},
		modelValue: {
			name: 'Model value',
			control: 'text',
		},
		setModelValue: {
			action: 'setModelValue',
		},
		size: {
			name: 'Size',
			control: 'radio',
			options: ['xs', 'sm', 'md', 'lg'],
		},
		testId: {
			name: 'Test automation tag',
			control: 'text',
		},
	},
}

export default meta

type Story = StoryObj<typeof Dropdown>

export const Default: Story = {
	render: (args) => {
		return (
			<Dropdown {...args} />
		)
	},
}

export const Size: Story = {
	render: (args) => {
		return (
			<div style={{ display: 'flex', gap: '10px', 'alignItems': 'center' }}>
				<Dropdown {...args} size='xs' label='Extra small' />
				<Dropdown {...args} size='sm' label='Small' />
				<Dropdown {...args} size='md' label='Medium' />
				<Dropdown {...args} size='lg' label='Large' />
			</div>
		)
	},
}

export const WithModelValue: Story = {
	render: (args) => {
		// eslint-disable-next-line
		const [value, setValue] = useState('')
		return <Dropdown {...args} modelValue={value} setModelValue={setValue} />
	},
}

export const WithOnClick: Story = {
	render: (args) => {
		const handleItemClick = (value: string) => {
			alert(`Clicked on: ${ value }`)
		}
	
		return (
			<Dropdown
				{...args}
				items={[
					{ label: 'Option 1', value: 'option1', onClick: handleItemClick },
					{ label: 'Option 2', value: 'option2', onClick: handleItemClick },
					{ label: 'Option 3', value: 'option3', onClick: handleItemClick },
				]} />
		)
	},
}

export const WithTA: Story = {
	render: (args) => {
		return (
			<Dropdown
				{...args}
				testId='dropdown-ta' />
		)
	},
}
