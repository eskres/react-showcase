import TextArea from "../../../atoms/textArea/TextArea";
import Label from "../../../atoms/label/Label";
import Button from "../../../atoms/button/Button";
import { useState, useRef } from "react";
import Paragraph from "../../../atoms/paragraph/Paragraph";

export default function ToDoAdd({ id, feedback, setToDos, toDos }) {

  const [text, setText] = useState("");
  const textRef = useRef(null);

  // Handle text area in DOM safely with useRef
  const resizeTextArea = (height) => {
    const textArea = textRef.current
    textArea.style.height = height
  }

  const handleNewToDo = (text) => {
    if (text.length >= 2) {
      setToDos([...toDos, {id: text.substring(0, 2).toLowerCase() + Date.now(), text: text, edit: false, done: false}]);
      setText("");
      resizeTextArea(null);
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
              setText(e.target.value);
              resizeTextArea(`${e.target.scrollHeight}px`)
            }}
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
        <Button onClick={() => {
            handleNewToDo(text);
          }}>
          Save
        </Button>
      </div>
    </div>
  )
}