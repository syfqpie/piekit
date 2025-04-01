import React from 'react'
import clsx from 'clsx'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown } from '@carbon/icons-react'

import { Button } from '../Button'
import { DropdownProps, DropdownItem } from '../../types/dropdown'
import { useOuterClick } from '@/lib/main'

const Dropdown: React.FC<DropdownProps> = ({
	className,
	label,
	size = 'md',
	testId,
	items = [],
	modelValue,
	setModelValue,
	...props
}) => {
	const [isOpen, setIsOpen] = React.useState(false)
	const dropdownRef = useOuterClick<HTMLDivElement>(() => isOpen && setIsOpen(false))
	const selectedItem = items.find(item => item.value === modelValue)

	const toggleDropdown = () => setIsOpen((prev) => !prev)
	const handleSelect = (item: DropdownItem) => {
		if (setModelValue) setModelValue(item.value)
		if (item.onClick) item.onClick(item.value)
		setIsOpen(false)
	}

	return (
		<div
			{...props}
			ref={dropdownRef}
			className={clsx('relative', className)}
			data-testid={testId}>
			<Button
				size={size}
				onClick={toggleDropdown}
				testId={`${ testId }-toggle`}>
				<span data-testid={`${ testId }-label`}>
					{selectedItem ? selectedItem.label : label}
				</span>

				<ChevronDown
					className={clsx('transition', {
						'rotate-180': isOpen,
					})} />
			</Button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -5 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -5 }}
						transition={{
							duration: 0.15,
						}}
						className={clsx(
							'absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg',
							{
								'rounded-lg': size === 'xs' || size === 'sm' || size === 'md' || size === undefined,
								'rounded-xl': size === 'lg',
							},
						)}>
						<ul
							className=''
							data-testid={`${ testId }-dropdown`}>
							{items.map((item, index) => (
								<li
									key={index}
									className={'group'}>
									<a
										className={clsx(
											'hover:bg-gray-300 cursor-pointer w-full flex',
											{
												'px-2.5 py-1.5 text-sm group-first:rounded-t-lg group-last:rounded-b-lg': size === 'xs',
												'px-4 py-2 text-sm group-first:rounded-t-lg group-last:rounded-b-lg': size === 'sm',
												'px-4.5 py-2.5 text-base group-first:rounded-t-lg group-last:rounded-b-lg': size === 'md' || size === undefined,
												'px-6 py-3 text-lg group-first:rounded-t-xl group-last:rounded-b-xl': size === 'lg',
												'bg-gray-200': item.value === selectedItem?.value,
											},
										)}
										data-testid={`${ testId }-option-${ index }`}
										onClick={() => handleSelect(item)}>
										{ item.label }
									</a>
								</li>
							))}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default Dropdown
