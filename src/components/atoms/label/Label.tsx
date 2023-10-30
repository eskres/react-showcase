import { LabelProps } from "labelInterfaces";

export default function Label({ className, htmlFor, children }: LabelProps): React.JSX.Element {
	return (
		<label
			className={className}
			htmlFor={htmlFor}
		>
			{children}
		</label>
	)
}