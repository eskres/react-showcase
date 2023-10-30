declare module "labelInterfaces" {
  export interface LabelProps extends React.LabelHTMLAttributes<HTMLElement> {
    children?: string;
  }
}