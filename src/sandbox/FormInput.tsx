import SandboxSection from '@/layout/sandbox/SandboxSection'
import SandboxView from '@/layout/sandbox/SandboxView'
import { FormInput } from '@/components/FormInput'

const FormInputSandbox = () => {
	return (
		<SandboxView title='FormInput'>
			<SandboxSection title='Standard usage'>
				<FormInput
					testId='form-name'
					label='Name'
					placeholder='Enter name' />
			</SandboxSection>

			<SandboxSection title='Disabled'>
				<FormInput
					testId='form-name'
					disabled
					label='Name'
					placeholder='Enter name' />
			</SandboxSection>

			<SandboxSection title='Error state'>
				<FormInput
					testId='form-name'
					label='Normal error'
					placeholder='Enter name'
					hasError={true}
					errorMessages={['Field required']} />
			</SandboxSection>
		</SandboxView>
	)
}

export default FormInputSandbox
