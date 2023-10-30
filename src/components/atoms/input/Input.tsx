import { InputProps } from "inputInterfaces";

export default function Input({
	type,
	inputMode,
	pattern,
	className,
	id,
	name,
	value,
	onChange,
	onBlur,
	min,
	max,
	required
}: InputProps): React.JSX.Element {
	return (
		<input
			type={type}
			inputMode={inputMode}
			pattern={pattern}
			className={className ? `form-control ${className}` : "form-control"}
			id={id}
			name={name}
			value={value}
			onChange={(e) => {onChange?.(e)}}
			onBlur={(e) => {onBlur?.(e)}}
			min={min ? min : undefined}
			max={max ? max : undefined}
			required={required}
		>
		</input>
	)
}