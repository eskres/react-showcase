import { useState, useEffect } from "react";
import ToDoAdd from "./toDoAdd/ToDoAdd";
import ToDoListItems from "./toDoListItems/ToDoListItems"

export default function ToDoApp() {
  
  const [toDos, setToDos] = useState(() => {
    // Get any saved to-dos from local storage
    const saved = JSON.parse(localStorage.getItem("toDos"));
    // Initialise state with saved to-dos if they exist
    if (saved) {
      return saved.data
    }
    return [{
      text: "My first to-do",
      edit: false,
      done: false,
      id: "my" + Date.now()
    }]
  });

  useEffect(() => {
    // Store to-dos in local storage on state change
    localStorage.setItem("toDos", JSON.stringify({data: toDos}))
  }, [toDos])

  const handleDeleteToDo = (toDoID) => {
    setToDos(toDos.filter((todo) => todo.id !== toDoID))
  }

  const handleEditToDo = (toDoEdit) => {
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
          setToDos={setToDos}
          delToDo={handleDeleteToDo}
          editToDo={handleEditToDo}
        />
      </div>
    </>
  )
}