import { InputHTMLAttributes } from 'react'
import { TestComponentMixin } from './mixins'

export type FormInputProps = TestComponentMixin &
	InputHTMLAttributes<HTMLInputElement> & {
		label?: string;
		groupClassName?: string;
		hasError?: boolean;
		errorMessages?: string[];
	}
