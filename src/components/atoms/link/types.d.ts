declare module "linkInterfaces" {
  export interface LinkProps extends React.AnchorHTMLAttributes<HTMLElement> {
    children?: string | React.JSX.Element;
    ariaLabel?: string;
    style?: React.CSSProperties
  }
}