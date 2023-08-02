import React from 'react'
import ToDoApp from './ToDoApp'
import PomodoroApp from './PomodoroApp'

export default function App() {
  return (
    <div className='container mt-4'>
      <h1 className='text-white'>Einar's React Showcase</h1>
      <div className='container my-4'>
        <p className='text-white'>A fully responsive mobile friendly Single Page App for me to showcase small projects that I have built with React, JavaScript, Bootstrap, JSX, HTML and CSS. The app currently consists of a pomodoro timer and a to-do list. I will be focussing on adding other features and projects that can help me practice and improve my skills with React, particularly the full range of React hooks.</p>
      </div>
      <PomodoroApp/>
      <ToDoApp/>
    </div>
  )
}