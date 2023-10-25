export default function ProgressBar({
  valueNow,
  valueMax,
  color,
  height,
  striped,
  animated,
  className
}) {
  return (
    <div className="progress my-3" role="progressbar" aria-label="Timer progress bar" aria-valuenow={valueNow} aria-valuemin="0" aria-valuemax={valueMax} style={{height:height + "px"}}>
        <div className={
                className ?
                `progress-bar 
                ${striped ? "progress-bar-striped" : null} 
                ${animated ? "progress-bar-animated" : null} 
                ${color}
                ${className}` :
                `progress-bar 
                ${striped ? "progress-bar-striped" : null} 
                ${animated ? "progress-bar-animated" : null} 
                ${color}`
            }
            style={{width: 100-(100/valueMax) * valueNow + "%"}}>
        </div>
    </div>
  )
}