import { useEffect, useState, useRef } from "react"
import { Modal } from "bootstrap";

// Component for timer progress bar and countdown
function Timer({remainingTime, task, settings, pause}) {
  return (
    <>
      <div className="progress my-3" role="progressbar" aria-label="Timer progress bar" aria-valuenow={remainingTime} aria-valuemin="0" aria-valuemax={task ? settings.task : settings.break} style={{height: 3 + "px"}}>
        <div className={"progress-bar-striped progress-bar-animated progress-bar" + (pause ? " bg-warning" : (task ? " bg-danger" : " bg-info"))} style={{width: 100-(100/(task ? settings.task : settings.break)) * remainingTime + "%"}}></div>
      </div>  
      <p className="text-white mt-2">
        {Math.floor(remainingTime / 60)} minutes and {Math.floor(remainingTime % 60)} seconds remaining
      </p>
    </>
  )
}

// Component for status badge
function Status({pause, task, settings, remainingTime}) {
  // Check whether timer has been started
  if (settings !== remainingTime) {
    // Check whether timer is paused
    if (pause) {
      return <span className="badge p-1 text-bg-warning ms-2">Paused</span>
    }
    // Check whether timer is on task or break
    if (task) {
      return <span className="badge p-1 text-bg-danger ms-2">On Task</span>
    } else {
      return <span className="badge p-1 text-bg-info ms-2">On Break</span>
    }
  }
  return
}

// Component for settings form modal
function Settings({settings, modalRef, setModal, handleSave}) {
  // State for input fields
  const [inputs, setInputs] = useState({
    task: settings.task / 60,
    break: settings.break / 60
  })

  // Handle user inputs
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: Number(value)}));
  }

  const validate = (e) => {
    // Tidy classes for validation
    const classes = e.target.classList;
    if (classes) {
      classes.remove('is-valid');
      classes.remove('is-invalid');
    }
    // Check for a valid inputs using the constraint validation api
    if (!e.target.checkValidity() || e.target.value === ""){
      classes.add('is-invalid');
      return
    }
  }

  return (
    <div className="modal" id="settings" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="modalTitle" aria-hidden="true" data-bs-theme="dark" ref={modalRef}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-light">Pomodoro Settings</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
            onClick={() => {
              setModal(prevModal => !prevModal);
            }}></button>
          </div>
          <form className="modal-body">
          <div className="form-floating mb-3 text-light">
            <input type="text" inputMode="numeric" pattern="[1-9][0-9]*" className="form-control" id="taskTime" name="task" value={inputs.task} onChange={handleChange} onBlur={validate} min={0} required></input>
            <label htmlFor="taskTime">Task duration (mins)</label>
            <p className="invalid-feedback">
              Task duration must be at least 1 minute
            </p>
          </div>
          <div className="form-floating text-light">
            <input type="text" inputMode="numeric" pattern="[1-9][0-9]*" className="form-control" id="breakTime" name="break" value={inputs.break} onChange={handleChange} onBlur={validate} min={0} required></input>
            <label htmlFor="breakTime">Break duration (mins)</label>
            <p className="invalid-feedback">
              Break duration must be at least 1 minute
            </p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-light" data-bs-dismiss="modal"
            onClick={
              () => {setModal(prevModal => !prevModal);
            }}>Close</button>
            <button type="button" className="btn btn-outline-light" onClick={() => handleSave(inputs)}>
              Save changes
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

// Component for timer buttons
function Buttons({pause, setPause,setRemainingTime, settings, setModal}) {
  return(
    <div className="row row-cols-auto">
      {
        // Conditionally render start and reset or pause buttons
        pause ?
          <div className="col d-flex flex-grow-1">
            <button type="button" className="btn btn-outline-light d-flex align-items-center me-2"
            onClick={() => {setPause(false)}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play" viewBox="0 0 16 16">
                <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
              </svg>
              Start
            </button>

            <button className="btn btn-outline-light"
            onClick={() => {
              setRemainingTime(settings.task);
              setPause(true);
            }}>Reset</button>
          </div>
        :
        <div className="col flex-grow-1">
          <button className="btn btn-outline-light d-flex align-items-center me-2" onClick={() => setPause(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pause" viewBox="0 0 16 16">
              <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
            </svg>
            Pause
          </button>
        </div>
      }
      <div className="col">
        <button type="button" className="btn btn-outline-light d-flex align-items-center h-100"
          onClick={() => {
            setPause(true);
            setModal(prevModal => !prevModal);
          }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

// Parent component to bring it all together
export default function PomodoroApp() {
  const [pause, setPause] = useState(true);
  const [task, setTask] = useState(true);
  const [settings, setSettings] = useState(() => {
      // Get any saved settings from local storage
      const saved = JSON.parse(localStorage.getItem("pomSettings"));
      // Initialise state with saved settings if they exist
      if (saved) {
        return saved
      }
      return {task: 25 * 60, break: 5 * 60}
    }
  );
  const [remainingTime, setRemainingTime] = useState(settings.task);
  const [modal, setModal] = useState(false);
  let modalRef = useRef();

  // Toggle modal visibilitiy
  const toggleModal = (modal) => {
    // useRef to safely access modal in DOM
    const myModal = Modal.getOrCreateInstance(modalRef.current);
    switch (modal) {
      case modal = false:
        myModal.hide();
        break;
      case modal = true:
        myModal.show();
        break;
      default:
        break;
    }
  }

  // Save user inputs to timer states and hide modal
  const handleSave = (inputs) => {
    if (inputs.task > 0 && inputs.break > 0) {      
      setTask(true);
      setSettings({task: inputs.task * 60, break: inputs.break * 60});
      setRemainingTime(inputs.task * 60);
      setModal(false);
    }
  }

  // For modal visibility
  useEffect(() => {
    toggleModal(modal);
  });

  useEffect(() => {
    // Store to-dos in local storage on state change
    localStorage.setItem("pomSettings", JSON.stringify(settings))
  }, [settings])

  // For timer and transitioning between task and break
  useEffect(() => {
    const timer = setInterval(() => {
      // Timer
      if (!pause && remainingTime > 0) {
        setRemainingTime((remainingTime) => remainingTime -1);
      }
      //Transition to break
      if (remainingTime === 0 && task) {
        setRemainingTime(settings.break);
        setTask(prevState => !prevState);
      }
      //Transition to task
      if (remainingTime === 0 && !task) {
        setRemainingTime(settings.task);
        setTask(prevState => !prevState);
      }
    }, 1000);
    return () => {clearInterval(timer)}
  }, [pause, remainingTime, task, settings]);

  return (
  <>
    <Settings
      settings={settings}
      modalRef={modalRef}
      setModal={setModal}
      handleSave={handleSave}
    />
    <h2 className="col text-white">
      Pomodoro Timer
      <Status
        pause={pause}
        task={task}
        settings={settings}
        remainingTime={remainingTime}
      />
    </h2>
    <div className="container mb-4">
      <Timer
        remainingTime={remainingTime}
        task={task}
        settings={settings}
        pause={pause}
      />
      <Buttons
        pause={pause}
        setPause={setPause}
        setRemainingTime={setRemainingTime}
        settings={settings}
        setModal={setModal}
      />
    </div>
  </>
  )
}