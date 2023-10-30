declare module "linkInterfaces" {
  export interface LinkProps extends React.AnchorHTMLAttributes<HTMLElement> {
    children?: string;
    ariaLabel?: string;
  }
}