import { HTMLAttributes } from 'react'
import { TestComponentMixin } from './mixins'

export interface DropdownItem {
	label: string;
	value: string;
	onClick?: (value: string) => void;
}

export type DropdownProps = TestComponentMixin &
	HTMLAttributes<HTMLDivElement> &
	{
		size?: 'xs' | 'sm' | 'md' | 'lg';
		label?: string;
		items?: DropdownItem[];
		modelValue?: string;
		setModelValue?: (value: string) => void;
	}
