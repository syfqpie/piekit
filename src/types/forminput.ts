import { InputHTMLAttributes } from 'react'
import { TestComponentMixin } from './mixins'

export type FormInputProps = TestComponentMixin &
	InputHTMLAttributes<HTMLInputElement> & {
		label?: string;
		hasError?: boolean;
		errorMessages?: string[];
	}
