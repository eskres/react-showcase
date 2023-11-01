import { PomoControlProps } from 'pomodoroInterfaces';
import Button from '../../../atoms/button/Button';

export default function PomoControlButtons({ pause, setPause, setRemainingTime, config }: PomoControlProps): React.JSX.Element {
  return (
    <div className="row row-cols-auto">
      {
        // Conditionally render start and reset or pause buttons
        pause ?
          <div className="col d-flex flex-grow-1">
            <Button color={"light"} className={"d-flex align-items-center me-2"} onClick={() => setPause(false)} icon="play">
              Start
            </Button>
            <Button color={"light"} onClick={() => {setRemainingTime(config.task); setPause(true);}}>
              Reset
            </Button>
          </div>
        :
        <div className="col flex-grow-1">
          <Button color={"light"} className={"d-flex align-items-center me-2"} onClick={() => setPause(true)} icon={"pause"}>
            Pause
          </Button>
        </div>
      }
      <div className="col">
        <Button color={"light"} className={"d-flex align-items-center h-100"} dataBsToggle={"modal"} dataBsTarget={"#configModal"} onClick={() => {setPause(true)}} icon={"gear"}/>
      </div>
    </div>
  )
}