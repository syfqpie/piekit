import React from 'react'
import clsx from 'clsx'

import { Button } from '@/components/Button'

interface SandboxSidebarProps {
	componentNames: string[];
	onSelect?: (name: string) => void;
}

const SandboxSidebar: React.FC<SandboxSidebarProps> = ({ componentNames, onSelect }) => {
	const [selected, setSelected] = React.useState(componentNames[0])

	const doSelect = (name: string) => {
		setSelected(name)
		onSelect?.(name)
	}

	return (
		<nav className='p-5 border-r border-r-gray-200 shadow min-w-40 max-w-40 w-40 shadow-gray-900/10'>
			<h3 className='mb-2'>
				Components
			</h3>

			<ul style={{ listStyle: 'none', padding: 0 }}>
				{componentNames.map((name) => (
					<li key={name} style={{ marginBottom: '5px' }}>
						<Button
							className={clsx({
								'bg-gray-800! enabled:hover:bg-gray-600! enabled:focus:ring-gray-500/30!': selected === name,
								'bg-transparent! enabled:text-gray-800 enabled:hover:bg-gray-600/80! enabled:hover:text-white! enabled:focus:ring-gray-500/30!': selected !== name,
							})}
							full={true}
							size='sm'
							onClick={() => doSelect(name)}>
							{name}
						</Button>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default SandboxSidebar
