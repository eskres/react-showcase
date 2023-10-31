import { InputGroupProps } from "inputGroupInterfaces";
import Input from "../../atoms/input/Input";
import Label from "../../atoms/label/Label";
import Paragraph from "../../atoms/paragraph/Paragraph";

export default function InputGroup({ fields, className }: InputGroupProps): Array<React.JSX.Element> {
  return (
    fields.map((value) => 
      <div className={className} key={value.id}>
        <Input
          type={value.type}
          inputMode={value.inputMode}
          pattern={value.pattern}
          id={value.id}
          name={value.name}
          value={value.value}
          onChange={value.onChange}
          onBlur={value.onBlur}
          min={value.min}
          max={value.max}
          required={value.required}
        />
        <Label className={value.label.className} htmlFor={value.label.htmlFor}>
          {value.label.content}
        </Label>
        <Paragraph className={value.feedback.className}>
          {value.feedback.content}
        </Paragraph>
      </div>
    )
  )
}

