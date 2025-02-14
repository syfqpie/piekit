import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	appearance?: 'solid';
	size?: 'xs' | 'sm' | 'md' | 'lg';
	variant?: 'primary' | 'secondary' | 'success' | 'error';
}

const Button: React.FC<ButtonProps> = ({
	variant = 'primary',
	appearance = 'solid',
	size = 'md',
	className,
	children,
	...props
}) => {
	return (
		<button
			{...props}
			className={clsx(
				'font-semibold transition-colors duration-150',
				'inline-flex items-center flex-shrink-0 gap-x-1.5',
				'focus:outline-none focus-visible:outline-none focus:ring-2',
				{
					// size
					'px-2.5 py-1.5 text-sm rounded-lg': size === 'xs',
					'px-4 py-2 text-sm rounded-lg': size === 'sm',
					'px-4.5 py-2.5 text-base rounded-lg': size === 'md' || size === undefined,
					'px-6 py-3 text-lg rounded-xl': size === 'lg',

					// solid
					'text-white bg-primary-500 hover:bg-primary-600 focus:ring-primary-500/30': appearance === 'solid' && variant === 'primary',
					'text-white bg-secondary-500 hover:bg-secondary-600 focus:ring-secondary-500/30': appearance === 'solid' && variant === 'secondary',
					'text-white bg-success-500 hover:bg-success-600 focus:ring-success-500/30': appearance === 'solid' && variant === 'success',
					'text-white bg-error-500 hover:bg-error-600 focus:ring-error-500/30': appearance === 'solid' && variant === 'error',
				},
				className,
			)}>
			{ children }
		</button>
	)
}

export default Button
