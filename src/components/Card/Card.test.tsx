import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Card from './Card'

describe('[PieKit Test] Card component', () => {
	it('renders with test tag', () => {
		render(<Card testId='test-card-id' />)
		expect(screen.getByTestId('test-card-id')).toBeInTheDocument()
	})
})
