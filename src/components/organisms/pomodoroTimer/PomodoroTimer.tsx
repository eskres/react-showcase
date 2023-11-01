import { useEffect, useState } from "react";
import PomoConfigModal from "./pomoConfigModal/PomoConfigModal";
import PomoStatusBadge from "./pomoStatusBadge/PomoStatusBadge";
import PomoControlButtons from "./pomoControlButtons/PomoControlButtons";
import PomoTimerCountdown from "./pomoTimerCountdown/PomoTimerCountdown";
import Heading from "../../atoms/headings/Heading";
import { PomoConfiguration } from "pomodoroInterfaces";

export default function PomodoroTimer(): React.JSX.Element{
  const [pause, setPause] = useState<boolean>(true);
  const [task, setTask] = useState<boolean>(true);
  const [config, setConfig] = useState<PomoConfiguration>(() => {
      // Get any saved config from local storage
      const saved = localStorage.getItem("pomConfig");
      // Initialise state with saved config if they exist
      if (saved) {
        return JSON.parse(saved).data;
      }
      return {task: 25 * 60, break: 5 * 60};
    }
  );
  const [remainingTime, setRemainingTime] = useState<number>(config.task);

  useEffect((): void => {
    // Store pomodoro config in local storage on state change
    localStorage.setItem("pomoConfig", JSON.stringify(config));
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
    return (() => {clearInterval(timer)});
  }, [pause, remainingTime, task, config]);

  return (
  <>
    <PomoConfigModal
      config={config}
      setTask={setTask}
      setConfig={setConfig}
      setRemainingTime={setRemainingTime}
    />
    <Heading heading={2} className={"col"}>
      <>
        Pomodoro Timer
        <PomoStatusBadge
          pause={pause}
          task={task}
          config={config}
          remainingTime={remainingTime}
        />
      </>
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