import { useEffect, useState } from "react";
import PomoConfigModal from "./pomoConfigModal/PomoConfigModal";
import PomoStatusBadge from "./pomoStatusBadge/PomoStatusBadge";
import PomoControlButtons from "./pomoControlButtons/PomoControlButtons";
import PomoTimerCountdown from "./pomoTimerCountdown/PomoTimerCountdown";
import Heading from "../../atoms/headings/Heading";

export default function PomodoroTimer() {
  const [pause, setPause] = useState(true);
  const [task, setTask] = useState(true);
  const [config, setConfig] = useState(() => {
      // Get any saved config from local storage
      const saved = JSON.parse(localStorage.getItem("pomConfig"));
      // Initialise state with saved config if they exist
      if (saved) {
        return saved
      }
      return {task: 25 * 60, break: 5 * 60}
    }
  );
  const [remainingTime, setRemainingTime] = useState(config.task);

  // Save user inputs to timer states
  const handleSave = (inputs) => {
    if (inputs.task > 0 && inputs.break > 0) {      
      setTask(true);
      setConfig({task: inputs.task * 60, break: inputs.break * 60});
      setRemainingTime(inputs.task * 60);
    }
  }

  useEffect(() => {
    // Store to-dos in local storage on state change
    localStorage.setItem("pomoConfig", JSON.stringify(config))
  }, [config])

  // For timer and transitioning between task and break
  useEffect(() => {
    const timer = setInterval(() => {
      // Timer
      if (!pause && remainingTime > 0) {
        setRemainingTime((remainingTime) => remainingTime -1);
      }
      //Transition to break
      if (remainingTime === 0 && task) {
        setRemainingTime(config.break);
        setTask(prevState => !prevState);
      }
      //Transition to task
      if (remainingTime === 0 && !task) {
        setRemainingTime(config.task);
        setTask(prevState => !prevState);
      }
    }, 1000);
    return () => {clearInterval(timer)}
  }, [pause, remainingTime, task, config]);

  return (
  <>
    <PomoConfigModal
      config={config}
      handleSave={handleSave}
    />
    <Heading heading={2} className={"col"}>
      Pomodoro Timer
      <PomoStatusBadge
        pause={pause}
        task={task}
        config={config}
        remainingTime={remainingTime}
      />
    </Heading>
    <div className="container mb-4">
      <PomoTimerCountdown
        remainingTime={remainingTime}
        task={task}
        config={config}
        pause={pause}
      />
      <PomoControlButtons
        pause={pause}
        setPause={setPause}
        setRemainingTime={setRemainingTime}
        config={config}
      />
    </div>
  </>
  )
}