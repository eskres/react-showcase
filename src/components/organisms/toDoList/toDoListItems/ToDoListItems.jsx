import ToDoItem from "../toDoItem/ToDoItem"
import ToDoEdit from "../toDoEdit/ToDoEdit"

export default function ToDoListItems({ toDos, delToDo, editToDo }) {

    return (
        toDos.map((value) => 
            <div className="row mx-0 mt-2 pt-2 border-top gx-2" key={value.id}>
                {
                    value.edit ?
                        // Conditionally render to-do item as a text area input if user selects edit
                        <ToDoEdit
                            key={value.id}
                            value={value.text}
                            onChange={(e) => {
                                editToDo({...value, text: e.target.value});
                                e.target.style.height = `${e.target.scrollHeight}px`;
                            }}
                            onFocus={(e) => {e.target.style.height = `${e.target.scrollHeight}px`}}
                            autoFocus={true}
                            onClick={() => value.text.length >= 2 ? editToDo({...value, edit: false}) : delToDo(value.id)}
                        />
                    :
                        // Otherwise to-do item is a checkbox input
                        <ToDoItem
                            key={value.id}
                            toDo={value}
                            onChange={(e) => {editToDo({...value, done: e.target.checked})}}
                            onClick={{
                                edit: () => {editToDo({...value, edit: true})},
                                delete: () => {delToDo(value.id)}
                            }}
                        />
                }
            </div>
        )
    )
}