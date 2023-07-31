import { useEffect, useState } from 'react'

export default function PomodoroApp() {
  const [pause, setPause] = useState(true);
  const [task, setTask] = useState(true);
  const [taskTime, setTaskTime] = useState(25 * 60)
  const [breakTime, setbreakTime] = useState(5 * 60)
  const [remainingTime, setRemainingTime] = useState(taskTime)
  
  useEffect(() => {
    const timer = setInterval(() => {
      if (!pause && remainingTime > 0) {
        setRemainingTime((remainingTime) => remainingTime -1);
      }
      //Switch to break
      if (remainingTime === 0 && task) {
        setRemainingTime(breakTime);
        setTask(prevState => !prevState);
      }
      //Switch to task
      if (remainingTime === 0 && !task) {
        setRemainingTime(taskTime);
        setTask(prevState => !prevState);
      }
    }, 1000);
    return () => {clearInterval(timer)}
  }, [pause, remainingTime, task, taskTime, breakTime]);

  function Status() {
    if (pause) {
      return <button type="button" className="btn btn-outline-warning me-2">Paused</button>
    }
    if (task) {
      return <button type="button" className="btn btn-outline-danger me-2">On Task</button>
    } else {
      return <button type="button" className="btn btn-outline-info me-2">On Break</button>
    }
  }

  return (
    <>
      <div className='row row-cols-auto gx-2'>
        <h2 className='col text-white flex-grow-1 mb-0'>
          Pomodoro Timer
        </h2>
        <div className='col d-flex align-items-center'>
          <button className='btn btn-outline-light'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
          </svg>
          </button>
        </div>
      </div>
      <div className='container mb-4'>
        <div className="progress my-3" role="progressbar" aria-label="Timer progress bar" aria-valuenow={remainingTime} aria-valuemin="0" aria-valuemax={task ? taskTime : breakTime} style={{height: 3 + "px"}}>
          <div className={"progress-bar-striped progress-bar-animated progress-bar" + (pause ? " bg-warning" : (task ? " bg-danger" : " bg-info"))} style={{width: 100-(100/(task ? taskTime : breakTime)) * remainingTime + "%"}}></div>
        </div>  
        <p className='text-white mt-2'>
          {Math.floor(remainingTime / 60)} minutes and {Math.floor(remainingTime % 60)} seconds remaining
        </p>
        <div className='row row-cols-auto'>
          <div className='col'>
            <Status/>
          </div>  
        {
          pause ?
          <>
          <div className='col'>
            <button type="button" className="btn btn-outline-light me-2 d-flex align-items-center" onClick={() => {setPause(false)}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
                <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
              </svg>
              Start
            </button>
          </div>
            <div className='col'>
              <button className="btn btn-outline-light me-2" onClick={() => {setRemainingTime(taskTime); setPause(true)}}>Reset</button>
            </div>
          </>
          :
          <div className='col'>
            <button className="btn btn-outline-light me-2 d-flex align-items-center" onClick={() => setPause(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause" viewBox="0 0 16 16">
                <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
              </svg>
              Pause
            </button>
          </div>
        }
        </div>
      </div>
    </>
  )
}
