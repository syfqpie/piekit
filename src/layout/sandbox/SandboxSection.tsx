import React from 'react'

interface SandboxSectionProps {
	title: string
	children: React.ReactNode
}

const SandboxSection: React.FC<SandboxSectionProps> = ({ title, children }) => {
	return (
		<section className='mb-2'>
			<h3 className='mb-1.5 font-semibold'>{title}</h3>
			<div className='bg-gray-100 p-6 min-w-3xl rounded-lg'>{children}</div>
		</section>
	)
}

export default SandboxSection
