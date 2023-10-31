import TextArea from "../../../atoms/textArea/TextArea";
import Label from "../../../atoms/label/Label";
import Button from "../../../atoms/button/Button";
import { useState, useRef } from "react";
import Paragraph from "../../../atoms/paragraph/Paragraph";
import { ToDoAddProps } from "toDoListInterfaces";

export default function ToDoAdd({ id, feedback, setToDos, toDos }: ToDoAddProps): React.JSX.Element{

  const [text, setText] = useState<string>("");
  const textRef = useRef<HTMLTextAreaElement>(null);

  // Handle text area in DOM safely with useRef
  const resizeTextArea = (height: string): void => {
    const textArea = textRef.current
    if (textArea) {
      textArea.style.height = height
    }
  }

  const handleNewToDo = (text: string): void => {
    if (text.length >= 2) {
      setToDos([...toDos, {id: text.substring(0, 2).toLowerCase() + Date.now(), text: text, edit: false, done: false}]);
      setText("");
      resizeTextArea("0px");
    }
  }

  return (
    <div className="row mb-3 gx-2 justify-content-end">
      <div className="col">
        <div className="form-floating">
          <TextArea
            id={id}
            value={text}
            min={2}
            max={360}
            required={true}
            onChange={(e) => {
              setText((e.target as HTMLTextAreaElement).value);
              resizeTextArea(`${e.target.scrollHeight}px`)
            }}
            autofocus={true}
            ref={textRef}
          />
          <Label htmlFor={id}>
            New to-do:
          </Label>
          <Paragraph className={feedback.className}>
            {feedback.content}
          </Paragraph>
        </div>
      </div>
      <div className="d-grid col-3">
        <Button onClick={() => 
            handleNewToDo(text)
          }>
          Save
        </Button>
      </div>
    </div>
  )
}