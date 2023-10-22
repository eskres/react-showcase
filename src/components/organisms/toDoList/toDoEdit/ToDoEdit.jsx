import TextArea from "../../../atoms/textArea/TextArea";
import Button from "../../../atoms/button/Button";
import { forwardRef } from "react";

const ToDoEdit = forwardRef(function ToDoEdit(props, ref) {
  const { value, onChange, onFocus, autofocus, onClick } = props
  return (
    <>
        <div className="col-12">
          <TextArea
              value={value}
              onChange={onChange}
              onFocus={onFocus}
              autfocus={autofocus}
              ref={ref}
          />
        </div>
        <div className="d-grid col-12 mt-2">
            <Button onClick={onClick}>
                Save
            </Button>
        </div>
    </>
  )
});

export default ToDoEdit;