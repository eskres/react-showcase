import ToDoList from './components/organisms/toDoList/ToDoList';
import PomodoroTimer from './components/organisms/pomodoroTimer/PomodoroTimer';
import Calculator from './components/organisms/calculator/Calculator';

export default function App() {
  return (
    <div className='container'>
      <Calculator/>
      <PomodoroTimer/>
      <ToDoList/>
    </div>
  )
}