import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Button from './Button'

describe('[PieKit] Button component', () => {
	it('renders content correctly', () => {
		render(<Button>Click</Button>)
		expect(screen.getByText('Click')).toBeInTheDocument()
	})

	it('renders with test tag', () => {
		render(<Button testId='test-btn-id'>Click</Button>)
		expect(screen.getByTestId('test-btn-id')).toBeInTheDocument()
	})
})
