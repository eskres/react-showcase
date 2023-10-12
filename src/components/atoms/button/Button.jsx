import Icon from '../Icons/Icon'

export default function Button(props) {
  const {onClick, type, value, icon, className, dataBsToggle, dataBsTarget, children} = props

  return (
    <button 
        onClick={onClick}
        type={type ? type : "button"}
        value={value}
        className={className ? `btn btn-outline-light ${className}` : "btn btn-outline-light"}
        data-bs-toggle={dataBsToggle ? dataBsToggle : undefined}
        data-bs-target={dataBsTarget ? dataBsTarget : undefined}
    >
      {icon ? <Icon icon={icon}/> : null}
      {children}
    </button>
  )
}