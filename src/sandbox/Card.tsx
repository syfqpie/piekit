import SandboxSection from '@/layout/sandbox/SandboxSection'
import SandboxView from '@/layout/sandbox/SandboxView'
import { Card } from '@/components/Card'

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
