import React from 'react'

const App: React.FC = () => {
	const [count, setCount] = React.useState(0)

	return (
		<>
			<div className="min-h-svh w-svw p-8 justify-center items-center flex flex-col">
				<h1 className="text-5xl mb-4">
					piekit
				</h1>

				<div className="card">
					<button onClick={() => setCount((count) => count + 1)}>
						count is {count}
					</button>
				</div>
			</div>
		</>
	)
}

export default App
