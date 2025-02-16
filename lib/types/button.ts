import { ButtonHTMLAttributes } from 'react'
import { TestComponentMixin } from './mixins'

export type ButtonProps = TestComponentMixin &
	ButtonHTMLAttributes<HTMLButtonElement> &
		{
			alignment?: 'start' | 'center' | 'end';
			appearance?: 'solid' | 'outline';
			size?: 'xs' | 'sm' | 'md' | 'lg';
			variant?: 'primary' | 'success' | 'error';
			full?: boolean;
		}
