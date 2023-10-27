import Icon from '../Icons/Icon';
import { ButtonProps } from "buttonInterfaces"

export default function Button({
  onClick,
  type,
  value,
  icon,
  color,
  className,
  dataBsToggle,
  dataBsTarget,
  dataBsDismiss,
  children
}: ButtonProps): React.JSX.Element {

  return (
    <button 
        onClick={onClick}
        type={type ? type : "button"}
        value={value}
        className={className ? `btn btn-outline-${color} ${className}` : "btn btn-outline-light"}
        data-bs-toggle={dataBsToggle ? dataBsToggle : undefined}
        data-bs-target={dataBsTarget ? dataBsTarget : undefined}
        data-bs-dismiss={dataBsDismiss ? dataBsDismiss : undefined}
    >
      {icon ? <Icon icon={icon}/> : null}
      {children}
    </button>
  )
}