import { forwardRef } from "react"
import validate from "../../../utils/validate"
import { TextareaProps } from "textareaInterfaces";

const TextArea = forwardRef(function TextArea(props: TextareaProps, ref: React.ForwardedRef<HTMLTextAreaElement>) {
  const { className, id, value, min, max, required, onChange, onFocus, autoFocus} = props
  return (
    <textarea
        className={className ? `form-control ${className}` : "form-control"}
        id={id}
        value={value}
        minLength={min ? min : undefined}
        maxLength={max ? max : undefined}
        required={required}
        onChange={(e) => {onChange?.(e)}}
        onFocus={(e) => {onFocus?.(e)}}
        onBlur={(e) => {validate?.(e)}}
        autoFocus={autoFocus}
        ref={ref}
    />
  )
});

export default TextArea;