import { Button } from '@/lib/components/Button'

import SandboxSection from '@/layout/sandbox/SandboxSection'
import SandboxView from '@/layout/sandbox/SandboxView'

const ButtonSandbox = () => {
	return (
		<SandboxView title='Button'>
			<SandboxSection title='Appearance'>
				<div className='flex flex-row gap-2'>
					<Button>Solid (default)</Button>
					<Button appearance='outline'>Outline</Button>
				</div>
			</SandboxSection>

			<SandboxSection title='Variant'>
		 		<div className='flex flex-row gap-2'>
		 			<Button>Primary (default)</Button>
		 			<Button variant='success'>Success</Button>
		 			<Button variant='error'>Error</Button>
		 			<Button appearance='outline'>Primary outline</Button>
		 			<Button appearance='outline' variant='success'>Success outline</Button>
		 			<Button appearance='outline' variant='error'>Error outline</Button>
		 		</div>
		 	</SandboxSection>

		 	<SandboxSection title='Disabled'>
		 		<div className='flex flex-row gap-2'>
		 			<Button disabled>Primary (default)</Button>
		 			<Button disabled variant='success'>Success</Button>
		 			<Button disabled variant='error'>Error</Button>
		 			<Button disabled appearance='outline'>Primary outline</Button>
		 			<Button disabled appearance='outline' variant='success'>Success outline</Button>
		 			<Button disabled appearance='outline' variant='error'>Error outline</Button>
		 		</div>
		 	</SandboxSection>
			
		 	<SandboxSection title='Size'>
		 		<div>
		 			<Button
		 				className='me-1'
		 				size='lg'>
		 				Large
		 			</Button>

		 			<Button className='me-1'>
		 				Medium (default)
		 			</Button>
					
		 			<Button
		 				className='me-1'
		 				size='sm'>
		 				Small
		 			</Button>

		 			<Button
		 				className='me-1'
		 				size='xs'>
		 				Extra small
		 			</Button>
		 		</div>
		 	</SandboxSection>

			<SandboxSection title='Full'>
			 	<div className='flex flex-col gap-2 max-w-52'>
		 			<Button full={true}>
		 				Solid
		 			</Button>

		 			<Button appearance='outline'>
		 				Outline
		 			</Button>
		 		</div>
		 	</SandboxSection>

			 <SandboxSection title='Alignment'>
			 	<div className='flex flex-col gap-2 max-w-52'>
		 			<Button full={true}  alignment='start'>
		 				Left
		 			</Button>

		 			<Button full={true} alignment='center'>
		 				Center (default)
		 			</Button>

					 <Button full={true} alignment='end'>
		 				Right
		 			</Button>
		 		</div>
		 	</SandboxSection>
		</SandboxView>
	)
}

export default ButtonSandbox
