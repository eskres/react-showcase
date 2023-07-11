import { useState } from "react";

function NewToDo({newToDo}) {
  const [text, setText] = useState("")
  
  return (
    <div className="container">
      <label for="newToDo">New to-do:</label>
      <input className="form-control" id="newToDo" onChange={(e) => {setText(e.target.value)}}/>
      <button
          type="button"
          className="btn btn-primary"
          onClick={() => {newToDo(text)}}
      >
        Save
      </button>
    </div>
  )
}

function ToDos({toDos, delToDo, editToDo}) {
  return (
    <div className="container">
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>
            <ToDo
              toDo={toDo}
              delToDo={delToDo}
              editToDo={editToDo}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

function ToDo({toDo, delToDo, editToDo}) {

  const [edit, setEdit] = useState(false);

  let toDoText;

  if (edit) {
    toDoText = (
      <>
        <input
          value={toDo.text}
          onChange={(e) => {editToDo({...toDo, text: e.target.value})}}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setEdit(false)}
        >
          Save
        </button>
      </>
    )
  } else {
    toDoText = (
      <>
        {toDo.text}
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {setEdit(true)}}
        >
          Edit
        </button>
      </>
    )
  }

  return (
      <div class="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={toDo.done}
          onChange={(e) => {editToDo({...toDo, done: e.target.checked})}}
        />
        <label className="form-check-label">{toDoText}</label>
        <button 
          onClick={() => {delToDo(toDo.id)}}
          type="button"
          className="btn btn-primary"
        >
          Delete
        </button>
      </div>
  )
}
  
  
export default function ToDoApp() {
  
  const [toDos, setToDos] = useState([
    { id: 0, text: "My first to-do", done: false}
  ]);

  const handleNewToDo = (text) => {
    setToDos([...toDos, {text: text, done: false, id: toDos.length}])
  }

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

  return (
  <div className="mb-3">
    <NewToDo
      newToDo={handleNewToDo}
    />
    <ToDos
      toDos={toDos}
      delToDo={handleDeleteToDo}
      editToDo={handleEditToDo}
    />
  </div>
  )
}