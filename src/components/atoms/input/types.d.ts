declare module "inputInterfaces" {
  export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onBlur?: (e: React.FormEvent<HTMLInputElement>) => void;
  }
}