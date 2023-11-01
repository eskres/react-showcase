import Modal from "../../../molecules/modal/Modal";
import InputGroup from "../../../molecules/inputGroup/InputGroup";
import Button from "../../../atoms/button/Button";
import { useState } from "react";
import type { PomoConfigModalProps } from "pomodoroInterfaces";
import type { InputFields } from "inputGroupInterfaces";

export default function PomoConfigModal({ config, setTask, setConfig, setRemainingTime }: PomoConfigModalProps): React.JSX.Element {
	const [inputs, setInputs] = useState<typeof config>({
		task: config.task / 60,
		break: config.break / 60
	})

	// Handle user inputs
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const name = e.target.name;
		const value = e.target.value;
		setInputs(values => ({...values, [name]: Number(value)}));
	}

	const validate = (e: React.ChangeEvent<HTMLInputElement>): void => {
		// Tidy classes for validation
		const classes = e.target.classList;
		if (classes) {
			classes.remove('is-valid');
			classes.remove('is-invalid');
		}
		// Check for a valid inputs using the constraint validation api
		if (!e.target.checkValidity() || e.target.value === ""){
			classes.add('is-invalid');
			return
		}
	}

	// Save user inputs to timer states
	const handleSave = (inputs: typeof config): void => {
		if (inputs.task > 0 && inputs.break > 0) {      
			setTask(true);
			setConfig({task: inputs.task * 60, break: inputs.break * 60});
			setRemainingTime(inputs.task * 60);
		}
	}

	const pomoConfigFields: Array<InputFields> = [
		{
			type: "text",
			inputMode: "numeric",
			pattern: "[1-9][0-9]*",
			id: "taskTime",
			name: "task",
			value: inputs.task,
			onChange: handleChange,
			onBlur: validate,
			min: 0,
			required: true,
			label: {
					htmlFor: "taskTime",
					content: "Task Duration (mins)"
			},
			feedback: {
					className: "invalid-feedback",
					content: "Task duration must be at least 1 minute"
			}
		},
		{
			type: "text",
			inputMode: "numeric",
			pattern: "[1-9][0-9]*",
			id: "breakTime",
			name: "break",
			value: inputs.break,
			onChange: handleChange,
			onBlur: validate,
			min: 0,
			required: true,
			label: {
					htmlFor: "breakTime",
					content: "Break Duration (mins)"
			},
			feedback: {
					className: "invalid-feedback",
					content: "Break duration must be at least 1 minute"
			}
		}]
  return (
    <>
			<Modal
				id={"configModal"}
				title={"Pomodoro Configuration"}
				body={
					<InputGroup
							fields={pomoConfigFields}
							className="form-floating mb-3"
					/>
				}
				footer={<>
					<Button dataBsDismiss={"modal"}>
							Close
					</Button>
					<Button
							dataBsDismiss={"modal"}
							onClick={() => handleSave(inputs)}
					>
							Save Changes
					</Button>
				</>}
			/>
    </>
  )
}