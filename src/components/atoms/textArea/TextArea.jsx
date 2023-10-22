import { forwardRef } from "react"
import validate from "../../../utils/validate"

const TextArea = forwardRef(function TextArea(props, ref) {
  const { className, id, value, min, max, required, onChange, onFocus, feedback, autoFocus} = props
  return (
    <textarea
        className={className ? `form-control ${className}` : "form-control"}
        id={id}
        value={value}
        minLength={min ? min : undefined}
        maxLength={max ? max : undefined}
        required={required}
        onChange={(e) => {onChange(e)}}
        onFocus={onFocus ? (e) => {onFocus(e)} : undefined}
        onBlur={validate}
        feedback={feedback}
        autoFocus={autoFocus}
        ref={ref}
    />
  )
});

export default TextArea;