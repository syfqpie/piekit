#!/usr/bin/env node
/**
 * generate.cjs - PieKit Component Sandbox File Generator
 *
 * Usage: node scripts/generate.cjs sandbox <ComponentName>
 *
 * This script generates a sandbox file for a given component.
 * It creates a file under <root>/src/sandbox/<ComponentName>.tsx
 * with a consistent template for documenting and testing PieKit component.
 * If file already exists, this script will overwrite it.
 *
 * Example:
 *   node scripts/generate.cjs sandbox Button
 *   // Creates: src/sandbox/Button.tsx
 */

const fs = require('fs')
const path = require('path')

const args = process.argv.slice(2)

if (args.length < 2 || args[0] !== 'sandbox') {
	console.error('[PieKit Script] ⚠️  Usage: node scripts/generate.cjs sandbox <ComponentName>')
	process.exit(1)
}

const componentName = args[1]
const rootDir = path.resolve(__dirname, '..') 
const sandboxDir = path.join(rootDir, 'src', 'sandbox')

const content = `import SandboxSection from '@/layout/sandbox/SandboxSection'
import SandboxView from '@/layout/sandbox/SandboxView'
import { ${componentName} } from '@/components/${componentName}'

const ${componentName}Sandbox = () => {
	return (
		<SandboxView
			title='${componentName} Component'
			description='A ${componentName.toLowerCase()} component'>
			<SandboxSection title='Add section title'>
				// Add content here
			</SandboxSection>
		</SandboxView>
	)
}

export default ${componentName}Sandbox
`

if (!fs.existsSync(sandboxDir)) {
	fs.mkdirSync(sandboxDir, { recursive: true })
}

const targetFile = path.join(sandboxDir, `${componentName}.tsx`)

fs.writeFileSync(targetFile, content, 'utf8')

console.log(`[PieKit Script] ✅ Sandbox file created at: ${targetFile}`)
