import { HTMLAttributes } from 'react'
import { TestComponentMixin } from './mixins'
import { Size } from './base'

export interface DropdownItem {
	label: string;
	value: string;
	onClick?: (value: string) => void;
}

export type DropdownProps = TestComponentMixin &
	HTMLAttributes<HTMLDivElement> &
	{
		size?: Size;
		label?: string;
		items?: DropdownItem[];
		modelValue?: string;
		setModelValue?: (value: string) => void;
	}
