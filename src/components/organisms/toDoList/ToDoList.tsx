import { useState, useEffect } from "react";
import ToDoAdd from "./toDoAdd/ToDoAdd";
import ToDoListItems from "./toDoListItems/ToDoListItems"
import { ToDoItem } from "toDoListInterfaces";

export default function ToDoApp() {
  
  const [toDos, setToDos] = useState<Array<ToDoItem>>(() => {
    // Get any saved to-dos from local storage
    const saved = localStorage.getItem("toDos");
    // Initialise state with saved to-dos if they exist
    if (saved) {
      return JSON.parse(saved).data;
    }
    return [{
      text: "My first to-do",
      edit: false,
      done: false,
      id: "my" + Date.now()
    }]
  });

  useEffect((): void => {
    // Store to-dos in local storage on state change
    localStorage.setItem("toDos", JSON.stringify({data: toDos}))
  }, [toDos])

  const handleDeleteToDo = (toDoID: string): void => {
    setToDos(toDos.filter((todo) => todo.id !== toDoID))
  }

  const handleEditToDo = (toDoEdit: ToDoItem): void => {
    setToDos(toDos.map(toDo => {
      if (toDo.id === toDoEdit.id) {
        return toDoEdit
      } else {
        return toDo
      }
    }));
  }

  const feedback = {
    className: "invalid-feedback",
    content: "A to-do must be at least 2 characters long"
  }

  return (
    <>
      <h2 className='text-white'>To-Do List</h2>
      <div className="container my-3">
        <ToDoAdd
          id={"newToDo"}
          required={true}
          toDos={toDos}
          setToDos={setToDos}
          feedback={feedback}
        />
        <ToDoListItems
          toDos={toDos}
          delToDo={handleDeleteToDo}
          editToDo={handleEditToDo}
        />
      </div>
    </>
  )
}