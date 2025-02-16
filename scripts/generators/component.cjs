const fs = require('fs')
const path = require('path')

module.exports = (componentName, rootDir) => {
    const componentsDir = path.join(rootDir, 'lib', 'components', componentName)
    const typesDir = path.join(rootDir, 'lib', 'types')

    // pre stage: check directory
    if (!fs.existsSync(componentsDir)) {
        fs.mkdirSync(componentsDir, { recursive: true });
    }

    // stage 1: component file
    const componentContent = `import clsx from 'clsx'
import { ${componentName}Props } from '../../types/${componentName.toLowerCase()}'

const ${componentName}: React.FC<${componentName}Props> = ({
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

export default ${componentName}
`
    const componentFile = path.join(componentsDir, `${componentName}.tsx`)
    fs.writeFileSync(componentFile, componentContent, 'utf8')
    console.log(`[PieKit Script] ✅ Component file created at: ${componentFile}`)

    // stage 2: test file
    const testContent = `import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ${componentName} from './${componentName}'

describe('[PieKit Test] ${componentName} component', () => {
	it('renders with test tag', () => {
		render(<${componentName} testId='test-${componentName.toLowerCase()}-id' />)
		expect(screen.getByTestId('test-${componentName.toLowerCase()}-id')).toBeInTheDocument()
	})
})
`
    const testFile = path.join(componentsDir, `${componentName}.test.tsx`)
    fs.writeFileSync(testFile, testContent, 'utf8')
    console.log(`[PieKit Script] ✅ Test file created at: ${testFile}`)

    // stage 3: index file
    const indexFile = path.join(componentsDir, 'index.ts')
    let indexContent = ''
    if (fs.existsSync(indexFile)) {
        indexContent = fs.readFileSync(indexFile, 'utf8')
    }
    const exportLine = `export { default as ${componentName} } from './${componentName}'`
    if (!indexContent.includes(exportLine)) {
        indexContent = indexContent.trim() + '\n' + exportLine + '\n'
        fs.writeFileSync(indexFile, indexContent, 'utf8')
        console.log(`[PieKit Script] ✅ Index file updated at: ${indexFile}`)
    } else {
        console.log(`[PieKit Script] ⚠️  Index file already contains export for ${componentName}`)
    }

    // stage 4: type file
    const typeContent = `import { HTMLAttributes } from 'react'
import { TestComponentMixin } from './mixins'

export type ${componentName}Props = TestComponentMixin &
	HTMLAttributes<HTMLDivElement>
`
    const typeFile = path.join(typesDir, `${componentName.toLowerCase()}.ts`)
    fs.writeFileSync(typeFile, typeContent, 'utf8')
    console.log(`[PieKit Script] ✅ Type file created at: ${typeFile}`)
}
