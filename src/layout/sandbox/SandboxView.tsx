import React from 'react'

interface SandboxViewProps {
	title: string
	children: React.ReactNode
}

const SandboxView: React.FC<SandboxViewProps> = ({ title, children }) => {
	return (
		<div>
			<h2 className='mb-2 font-semibold text-lg'>
				Component: <span className='bg-gray-900/20 px-1 py-0.5'>
					{title}
				</span>
			</h2>
			<div>{children}</div>
		</div>
	)
}

export default SandboxView
