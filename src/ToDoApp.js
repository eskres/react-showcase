import { useState, useRef } from "react";

// Component for new to-do form
function NewToDo({newToDo}) {
  const [text, setText] = useState("");
  const textRef = useRef(null);

  // Handle text area in DOM safely with useRef
  const resizeTextArea = (height) => {
    const textArea = textRef.current
    textArea.style.height = height
  }
  
  return (
      <div className="row mb-3 gx-2 justify-content-end">
        <div className="col">
          <div className="form-floating">
            <textarea className="form-control" id="newToDo" value={text} 
            onChange={(e) => {
              setText(e.target.value);
              resizeTextArea(`${e.target.scrollHeight}px`)
            }}
            ref={textRef}
            />
            <label htmlFor="newToDo">New to-do:</label>
          </div>
        </div>
        <div className="d-grid col-3">
          <button
              type="button"
              className="btn btn-outline-light"
              onClick={() => {newToDo(text); setText(""); resizeTextArea(null)}}
          >
            Save
          </button>
        </div>
      </div>
  )
}

// Component to list to-do items
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

// Component for individual to-do items
function ToDo({toDo, delToDo, editToDo}) {
  const [edit, setEdit] = useState(false);
  let toDoItem;
  
  // Conditionally render to-do item as a text area input if user selects edit
  if (edit) {
    toDoItem = (
      <>
      <div className="col-12">
        <textarea
          className="form-control"
          type="text"
          value={toDo.text}
          onChange={(e) => {editToDo({...toDo, text: e.target.value}); e.target.style.height = `${e.target.scrollHeight}px`}}
          onFocus={(e) => {e.target.style.height = `${e.target.scrollHeight}px`}}
          autoFocus
        />
      </div>
        <div className="d-grid col-12 mt-2">
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
    // Otherwise to-do item is a checkbox input
    toDoItem = (
      <>
      <div className="clearfix">
        <div className="form-check col float-start">
          <input
            className="form-check-input"
            type="checkbox"
            value={toDo.done}
            id={toDo.id}
            onChange={(e) => {editToDo({...toDo, done: e.target.checked})}}
          />
          <label className="form-check-label text-white" htmlFor={toDo.id}>{toDo.text}</label>
        </div>
        <div className="col pe-0 float-end">
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
  
// Parent component to bring it all together
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
    <>
      <h2 className='text-white'>To-Do List</h2>
      <div className="container my-3">
        <NewToDo
          newToDo={handleNewToDo}
        />
        <ToDos
          toDos={toDos}
          delToDo={handleDeleteToDo}
          editToDo={handleEditToDo}
        />
      </div>
    </>
  )
}