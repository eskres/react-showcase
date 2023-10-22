import Input from "../../atoms/input/Input";
import Label from "../../atoms/label/Label";
import Paragraph from "../../atoms/paragraph/Paragraph";

export default function InputGroup({ fields, className }) {
  return (
    fields.map((value, index) => 
      <div className={className} key={index}>
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
          {value.feedback.value}
        </Paragraph>
      </div>
    )
  )
}

