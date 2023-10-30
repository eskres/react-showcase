export default function InputCheckOrRadio({
	type,
	inputMode,
	pattern,
	className,
	id,
	checked,
	onChange,
	required
}: React.InputHTMLAttributes<HTMLInputElement>): React.JSX.Element {
	return (
		<input
			type={type}
			inputMode={inputMode}
			pattern={pattern}
			className={className ? `form-check-input ${className}` : "form-check-input"}
			id={id}
			checked={checked}
			onChange={(e) => {onChange?.(e)}}
			required={required}
		>
		</input>
	)
}