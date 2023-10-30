declare module "textareaInterfaces" {
  export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLElement> {
    min?: number;
    max?: number;
    feedback?: boolean
  }
}