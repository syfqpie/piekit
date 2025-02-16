import { FormTextArea } from '@/lib/components/FormTextArea'
import SandboxSection from '@/layout/sandbox/SandboxSection'
import SandboxView from '@/layout/sandbox/SandboxView'

const FormTextAreaSandbox = () => {
	return (
		<SandboxView title='FormTextArea'>
			<SandboxSection title='Standard usage'>
				<FormTextArea
					testId='form-name'
					label='Name'
					placeholder='Enter name' />
			</SandboxSection>

			<SandboxSection title='Disabled'>
				<FormTextArea
					testId='form-name'
					disabled
					label='Name'
					placeholder='Enter name' />
			</SandboxSection>

			<SandboxSection title='Error state'>
				<FormTextArea
					testId='form-name'
					label='Normal error'
					placeholder='Enter name'
					hasError={true}
					errorMessages={['Field required']} />
			</SandboxSection>
		</SandboxView>
	)
}

export default FormTextAreaSandbox
