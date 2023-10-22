import React from 'react'
import ToDoList from './components/organisms/toDoList/ToDoList'
import PomodoroTimer from './components/organisms/pomodoroTimer/PomodoroTimer'
import CalculatorApp from './CalculatorApp'

export default function App() {
  return (
    <div className='container'>
      <CalculatorApp/>
      <PomodoroTimer/>
      <ToDoList/>
    </div>
  )
}