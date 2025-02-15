import { HTMLAttributes } from 'react'
import { TestComponentWithChildrenMixin } from './mixins'

export type CardProps = TestComponentWithChildrenMixin &
	HTMLAttributes<HTMLDivElement>
