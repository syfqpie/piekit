import { Card } from '@/lib/components/Card'

import SandboxSection from '@/layout/sandbox/SandboxSection'
import SandboxView from '@/layout/sandbox/SandboxView'

const CardSandbox = () => {
	return (
		<SandboxView title='Card'>
			<SandboxSection title='General'>
				<Card>
					Test
				</Card>
			</SandboxSection>
		</SandboxView>
	)
}

export default CardSandbox
