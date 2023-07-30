import React from 'react'
import ToDoApp from './ToDoApp'
import PomodoroApp from './PomodoroApp'

export default function App() {
  return (
    <div className='container mt-4'>
      <h1 className='text-white'>Einar's React Showcase</h1>
      <div className='container'>
        <p className='text-white'>A fully responsive mobile friendly Single Page App for me to showcase small projects that I have built with React, JavaScript, Bootstrap, HTML and CSS.</p>
      </div>
      <h2 className='text-white'>Pomodoro Timer</h2>
      <PomodoroApp/>
      <h2 className='text-white'>To-Do List</h2>
      <ToDoApp/>
    </div>
  )
}