import React from 'react'
import SandboxSidebar from './layout/sandbox/SandboxSidebar'

const modules = import.meta.glob('./sandbox/*.tsx')

const Sandbox = () => {
	const componentNames = Object.keys(modules).map((file) =>
		file.replace('./sandbox/', '').replace('.tsx', ''),
	)
	const [selected, setSelected] = React.useState(componentNames[0])

	// eslint-disable-next-line
	const Component = React.lazy(modules[`./sandbox/${ selected }.tsx`] as any)

	React.useEffect(() => {
		document.title = 'PieKit Sandbox'
	}, [])

	return (
		<div className='flex h-svh'>
			<SandboxSidebar
				componentNames={componentNames}
				onSelect={setSelected} />

			<div className='flex p-5'>
				<React.Suspense
					fallback={
						<h2 className='text-lg'>Loading...</h2>
					}>
					<Component />
				</React.Suspense>
			</div>
		</div>
	)
}

export default Sandbox
