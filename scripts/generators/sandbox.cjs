const fs = require('fs')
const path = require('path')

module.exports = (componentName, rootDir) => {
    const sandboxDir = path.join(rootDir, 'src', 'sandbox')
    const content = `import { ${componentName} } from '@/lib/components/${componentName}'
import SandboxSection from '@/layout/sandbox/SandboxSection'
import SandboxView from '@/layout/sandbox/SandboxView'

const ${componentName}Sandbox = () => {
	return (
		<SandboxView title='${componentName}'>
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
}
