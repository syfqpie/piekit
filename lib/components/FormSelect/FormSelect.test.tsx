import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import FormSelect from './FormSelect'

describe('[PieKit Test] FormSelect component', () => {
	it('renders with test tag', () => {
		render(<FormSelect testId='test-formselect-id' />)
		expect(screen.getByTestId('test-formselect-id')).toBeInTheDocument()
	})
})
