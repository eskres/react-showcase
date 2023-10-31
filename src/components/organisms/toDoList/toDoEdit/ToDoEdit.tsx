import TextArea from "../../../atoms/textArea/TextArea";
import Button from "../../../atoms/button/Button";
import { forwardRef } from "react";
import { ToDoEditProps } from "toDoListInterfaces";

const ToDoEdit = forwardRef(function ToDoEdit(props: ToDoEditProps, ref: React.ForwardedRef<HTMLTextAreaElement>): React.JSX.Element{
  const { value, onChange, onFocus, onClick } = props
  return (
    <>
        <div className="col-12">
          <TextArea
              value={value}
              onChange={onChange}
              onFocus={onFocus}
              autofocus={true}
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