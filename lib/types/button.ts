import { ComponentPropsWithRef } from 'react'
import { TestComponentMixin } from './mixins'

export type ButtonProps = TestComponentMixin &
	ComponentPropsWithRef<'button'> &
		{
			alignment?: 'start' | 'center' | 'end';
			appearance?: 'solid' | 'outline';
			size?: 'xs' | 'sm' | 'md' | 'lg';
			variant?: 'primary' | 'success' | 'error';
			full?: boolean;
		}
