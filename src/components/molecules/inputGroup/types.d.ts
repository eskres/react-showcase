declare module "inputGroupInterfaces" {
  import type { InputProps } from "inputInterfaces";

  export interface InputFields extends InputProps {
    label: {
      htmlFor: string;
      content: string;
      className?: string
    }
    feedback: {
      className: string;
      content: string;
    }
  }

  export interface InputGroupProps {
    fields: Array<InputFields>;
    className: string;
  }
}