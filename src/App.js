import React from 'react'
import ToDoApp from './ToDoApp'
import PomodoroApp from './PomodoroApp'

export default function App() {
  return (
    <div className='container'>
      <PomodoroApp/>
      <ToDoApp/>
    </div>
  )
}