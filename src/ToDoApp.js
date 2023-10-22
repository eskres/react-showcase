import { useState, useEffect } from "react";
import ToDoAdd from "./components/organisms/toDoList/toDoAdd/ToDoAdd";
import ToDoListItems from "./components/organisms/toDoList/toDoListItems/ToDoListItems"

// // Component for new to-do form
// function NewToDo({setToDos, toDos}) {
//   const [text, setText] = useState("");
//   const textRef = useRef(null);

//   // Handle text area in DOM safely with useRef
//   const resizeTextArea = (height) => {
//     const textArea = textRef.current
//     textArea.style.height = height
//   }

//   const handleNewToDo = (text) => {
//     setToDos([...toDos, {id: text.substring(0, 2).toLowerCase() + Date.now(), text: text, edit: false, done: false}])
//   }
  
//   return (
//         <ToDoAdd
//           id={"newToDo"}
//           value={text}
//           ref={textRef}
//           onChange={(e) => {
//             setText(e.target.value);
//             resizeTextArea(`${e.target.scrollHeight}px`)
//           }}
//           onClick={() => {
//             handleNewToDo(text);
//             setText("");
//             resizeTextArea(null)
//           }}
//         />
//   )
// }

// Component to list to-do items
// function ToDos({toDos, delToDo, editToDo}) {
//   return (
//     <>
//       {toDos.map((toDo) => (
//         <div className="row mx-0 mt-2 pt-2 border-top gx-2" key={toDo.id}>
//           <ToDo
//             toDo={toDo}
//             delToDo={delToDo}
//             editToDo={editToDo}
//           />
//         </div>
//       ))}
//     </>
//   )
// }

// // Component for individual to-do items
// function ToDo({toDo, delToDo, editToDo}) {
//   const [edit, setEdit] = useState(false);
//   let toDoItem;
  
//   // Conditionally render to-do item as a text area input if user selects edit
//   if (edit) {
//     toDoItem = (
//       <ToDoEdit
//         value={toDo.text}
//         onChange={(e) => {
//           editToDo({...toDo, text: e.target.value});
//           e.target.style.height = `${e.target.scrollHeight}px`;
//         }}
//         onFocus={(e) => {e.target.style.height = `${e.target.scrollHeight}px`}}
//         autoFocus={true}
//         onClick={() => setEdit(false)}
//       />
//     )
//   } else {
//     // Otherwise to-do item is a checkbox input
//     toDoItem = (
//       <ToDoItem
//         toDo={toDo}
//         onChange={(e) => {editToDo({...toDo, done: e.target.checked})}}
//         onClick={{
//           edit: () => {setEdit(true)},
//           delete: () => {delToDo(toDo.id)}
//         }}
//       />
//     )
//   }

//   return (
//     <>
//       {toDoItem}
//     </>
//   )
// }
  
// Parent component to bring it all together
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

  // const handleNewToDo = (text) => {
  //   setToDos([...toDos, {id: text.substring(0, 2).toLowerCase() + Date.now(), text: text, edit: false, done: false}])
  // }

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