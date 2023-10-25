import ProgressBar from "../../../atoms/progressBar/ProgressBar";
import Paragraph from "../../../atoms/paragraph/Paragraph";

export default function PomoTimerCountdown({ remainingTime, task, config, pause }) {
    let valueMax;
    let color;
    task ? valueMax=config.task : valueMax=config.break
    pause ? color="bg-warning" : (task ? color="bg-danger" : color="bg-info")
    const minutesRemaining = Math.floor(remainingTime / 60)
    const secondsRemaining = Math.floor(remainingTime % 60)

    return (
        <>
        <ProgressBar
            valueNow={remainingTime}
            valueMax={valueMax}
            color={color}
            height={3}
            striped={true}
            animated={true}
        />
        <Paragraph className="mt-2">
            {minutesRemaining} minutes and {secondsRemaining} seconds remaining
        </Paragraph>
        </>
    )
}