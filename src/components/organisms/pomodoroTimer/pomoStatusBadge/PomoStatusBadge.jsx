import Badge from "../../../atoms/badge/Badge";

export default function PomoStatusBadge({ pause, task, config, remainingTime }) {
    if (config.task === remainingTime && pause) {
        return
    }
    // Check whether timer is paused
    if (pause) {
        return <Badge color={"warning"} className={"ms-2"}>Paused</Badge>
    }
    // Check whether timer is on task or break
    if (task) {
        return <Badge color={"danger"} className={"ms-2"}>On Task</Badge>
    } else {
        return <Badge color={"info"} className={"ms-2"}>On Break</Badge>
    }
}