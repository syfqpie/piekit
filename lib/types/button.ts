import { ComponentPropsWithRef } from 'react'
import { TestComponentMixin } from './mixins'
import { Size } from './base'

export type ButtonProps = TestComponentMixin &
	ComponentPropsWithRef<'button'> &
		{
			alignment?: 'start' | 'center' | 'end';
			appearance?: 'solid' | 'outline';
			size?: Size;
			variant?: 'primary' | 'success' | 'error';
			full?: boolean;
		}
