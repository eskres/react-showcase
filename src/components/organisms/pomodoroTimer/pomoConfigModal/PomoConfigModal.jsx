import Modal from "../../../molecules/modal/Modal";
import InputGroup from "../../../molecules/inputGroup/InputGroup";
import Button from "../../../atoms/button/Button";
import { useState } from "react";

export default function PomoConfigModal({ config, handleSave }) {
    const [inputs, setInputs] = useState({
        task: config.task / 60,
        break: config.break / 60
      })

    // Handle user inputs
    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setInputs(values => ({...values, [name]: Number(value)}));
    }
  
    const validate = (e) => {
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

    const pomoConfigFields = [
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