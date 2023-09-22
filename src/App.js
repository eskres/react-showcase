import React from 'react'
import ToDoApp from './ToDoApp'
import PomodoroApp from './PomodoroApp'
import CalculatorApp from './CalculatorApp'

export default function App() {
  return (
    <div className='container'>
      <CalculatorApp/>
      <PomodoroApp/>
      <ToDoApp/>
    </div>
  )
}