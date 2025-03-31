const fs = require('fs')
const path = require('path')

const generateComponentFiles = (componentName, rootDir) => {
	const paths = {
        components: path.join(rootDir, 'lib', 'components', componentName),
        types: path.join(rootDir, 'lib', 'types'),
    }

	if (!fs.existsSync(paths.components)) {
        fs.mkdirSync(paths.components, { recursive: true })
    }

	const files = [
        { name: `${componentName}.tsx`, content: generateComponentContent(componentName), dir: paths.components },
        { name: `${componentName}.test.tsx`, content: generateTestContent(componentName), dir: paths.components },
        { name: `${componentName}.stories.tsx`, content: generateStoryContent(componentName), dir: paths.components },
        { name: `${componentName}.mdx`, content: generateDocsContent(componentName), dir: paths.components },
        { name: `${componentName.toLowerCase()}.ts`, content: generateTypeContent(componentName), dir: paths.types },
    ]

	let createdFiles = 0

	// create required files
    files.forEach(({ name, content, dir }) => {
		const filePath = path.join(dir, name)

        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, content, 'utf8')
            console.log(`[PieKit Script] ✅ Created: ${filePath}`)
            createdFiles++
        }
	})

    if (createdFiles === 0) {
        console.log(`[PieKit Script] ✅ All component files for ${componentName} already exist. Nothing to create.`)
    }

    updateIndexFile(paths.components, componentName)
}

const updateIndexFile = (componentsDir, componentName) => {
    const indexFile = path.join(componentsDir, 'index.ts')
    let indexContent = fs.existsSync(indexFile) ? fs.readFileSync(indexFile, 'utf8') : ''
    const exportLine = `export { default as ${componentName} } from './${componentName}'\n`

    if (!indexContent.includes(exportLine)) {
        indexContent = indexContent.trimStart() + exportLine
        fs.writeFileSync(indexFile, indexContent, 'utf8')
        console.log(`[PieKit Script] ✅ Updated index.ts`)
    } else {
        console.log(`[PieKit Script] ⚠️ Index file already contains export for ${componentName}`)
    }
}

const generateComponentContent = (name) => `
import clsx from 'clsx'
import { ${name}Props } from '../../types/${name.toLowerCase()}'

const ${name}: React.FC<${name}Props> = ({
	className,
	testId,
	...props
}) => {
	return (
		<div
			{...props}
			className={clsx('', {}, className)}
			data-testid={testId}>
			// add here
		</div>
	)
}

export default ${name}
`.trimStart()

const generateTestContent = (name) => `
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ${name} from './${name}'

describe('[PieKit Test] ${name} component', () => {
	it('renders with test tag', () => {
		render(<${name} testId='test-${name.toLowerCase()}-id' />)
		expect(screen.getByTestId('test-${name.toLowerCase()}-id')).toBeInTheDocument()
	})
})
`.trimStart()

const generateStoryContent = (name) => `
import type { Meta, StoryObj } from '@storybook/react'
import ${name} from './${name}'

const meta: Meta<typeof ${name}> = {
	title: 'Components/${name}',
	component: ${name},
	args: { },
	argTypes: {
		testId: {
			name: 'Test automation tag',
			description: 'Test automation ID',
			control: 'text',
		},
	},
}

export default meta

type Story = StoryObj<typeof ${name}>

export const Default: Story = {
	args: { },
}
`.trimStart()

const generateDocsContent = (name) => `
import { Canvas, Meta, Story } from '@storybook/blocks'
import ${name} from './${name}'
import * as ${name}Stories from './${name}.stories'

<Meta of={${name}Stories} />

# ${name}
`.trimStart()

const generateTypeContent = (name) => `
import { HTMLAttributes } from 'react'
import { TestComponentMixin } from './mixins'

export type ${name}Props = TestComponentMixin &
	HTMLAttributes<HTMLDivElement>
`.trimStart()

module.exports = generateComponentFiles
