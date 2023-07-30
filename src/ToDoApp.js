import { useState } from "react";

function NewToDo({newToDo}) {
  const [text, setText] = useState("")
  
  return (
      <div className="row mb-4 gx-2 justify-content-end">
        <div className="col">
          <div className="form-floating">
            <textarea className="form-control" id="newToDo" value={text} onChange={(e) => {setText(e.target.value)}}/>
            <label for="newToDo">New to-do:</label>
          </div>
        </div>
        <div className="d-grid col-3">
          <button
              type="button"
              className="btn btn-outline-light"
              onClick={() => {newToDo(text); setText("")}}
          >
            Save
          </button>
        </div>
      </div>
  )
}

function ToDos({toDos, delToDo, editToDo}) {
  return (
    <>
      {toDos.map((toDo) => (
        <div className="row mx-0 mt-2 pt-2 border-top gx-2" key={toDo.id}>
          <ToDo
            toDo={toDo}
            delToDo={delToDo}
            editToDo={editToDo}
          />
        </div>
      ))}
    </>
  )
}

function ToDo({toDo, delToDo, editToDo}) {
  const [edit, setEdit] = useState(false);
  let toDoItem;

  if (edit) {
    toDoItem = (
      <>
      <div className="col">
        <textarea
          className="form-control"
          type="text"
          value={toDo.text}
          onChange={(e) => {editToDo({...toDo, text: e.target.value})}}
        />
      </div>
        <div className="d-grid col-3">
          <button
            type="button"
            className="btn btn-outline-light"
            onClick={() => setEdit(false)}
          >
            Save
          </button>
        </div>
      </>
    )
  } else {
    toDoItem = (
      <>
        <div className="form-check col">
          <input
            className="form-check-input"
            type="checkbox"
            value={toDo.done}
            id={toDo.id}
            onChange={(e) => {editToDo({...toDo, done: e.target.checked})}}
          />
          <label className="form-check-label text-white" for={toDo.id}>{toDo.text}</label>
        </div>
        <div className="col pe-0 text-end">
          <button
            type="button"
            className="btn btn-outline-light ms-1"
            onClick={() => {setEdit(true)}}
          >
            Edit
          </button>
          <button 
            onClick={() => {delToDo(toDo.id)}}
            type="button"
            className="btn btn-outline-light ms-1"
          >
            Delete
          </button>
        </div>
          
      </>
    )
  }

  return (
    <>
      {toDoItem}
    </>
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
  <div className="container mt-4">
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