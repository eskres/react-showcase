import React from 'react'
import ToDoApp from './ToDoApp'
import PomodoroTimer from './components/organisms/pomodoroTimer/PomodoroTimer'
import CalculatorApp from './CalculatorApp'

export default function App() {
  return (
    <div className='container'>
      <CalculatorApp/>
      <PomodoroTimer/>
      <ToDoApp/>
    </div>
  )
}