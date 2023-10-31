import { ToDoItemProps } from 'toDoListInterfaces';
import Button from '../../../atoms/button/Button';
import InputCheck from '../../../atoms/inputCheckOrRadio/InputCheckOrRadio';
import Label from '../../../atoms/label/Label';

export default function ToDoItem({ toDo, onChange, onClick }: ToDoItemProps): React.JSX.Element {
  return (
		<div className="clearfix">
			<div className="form-check col float-start">
				<InputCheck
						type={"checkbox"}
						checked={toDo.done}
						id={toDo.id}
						onChange={onChange}
				/>
				<Label
						className={"form-check-label text-white"}
						htmlFor={toDo.id}
				>
						{toDo.text}
				</Label>
			</div>
			<div className="col pe-0 float-end">
				<Button
						color={"light"}
						className={"ms-1"}
						onClick={onClick.edit}
				>
						Edit
				</Button>
				<Button
						color={"light"}
						className={"ms-1"}
						onClick={onClick.delete}
				>
						Delete
				</Button>
			</div>
		</div>
  )
}