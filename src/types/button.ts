import { ButtonHTMLAttributes } from 'react'
import { TestComponentMixin } from './mixins'

export type ButtonProps = TestComponentMixin &
	ButtonHTMLAttributes<HTMLButtonElement> &
		{
			appearance?: 'solid' | 'outline';
			size?: 'xs' | 'sm' | 'md' | 'lg';
			variant?: 'primary' | 'secondary' | 'success' | 'error';
		}
