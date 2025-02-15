import React from 'react'

interface SandboxSectionProps {
	title: string
	children: React.ReactNode
}

const SandboxSection: React.FC<SandboxSectionProps> = ({ title, children }) => {
	return (
		<section className='mb-2'>
			<h3 className='mb-1.5 font-semibold'>{title}</h3>
			<div>{children}</div>
		</section>
	)
}

export default SandboxSection
