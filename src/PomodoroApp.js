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
    <div className='container mt-2'>

      <div className="progress my-3" role="progressbar" aria-label="Timer progress bar" aria-valuenow={remainingTime} aria-valuemin="0" aria-valuemax={task ? taskTime : breakTime} style={{height: 1 + "px"}}>
        <div className={"progress-bar" + (task ? " bg-danger": " bg-info")} style={{width: 100-(100/(task ? taskTime : breakTime)) * remainingTime + "%"}}></div>
      </div>  
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
      <p className='text-white mt-2'>
        {Math.floor(remainingTime / 60)} minutes and {Math.floor(remainingTime % 60)} seconds remaining
      </p>
    </div>
  )
}
