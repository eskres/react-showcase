import ToDoList from './components/organisms/toDoList/ToDoList';
import PomodoroTimer from './components/organisms/pomodoroTimer/PomodoroTimer';
import Calculator from './components/organisms/calculator/Calculator';
import Header from './components/molecules/header/Header';
import Footer from './components/molecules/footer/Footer';

export default function App() {
  return (
    <>
      <Header/>
      <div className='container'>
        <Calculator/>
        <PomodoroTimer/>
        <ToDoList/>
      </div>
      <Footer/>
    </>
  )
}