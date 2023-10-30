declare module "buttonInterfaces" {
  export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any;
    icon?: string
    iconClassName?: string
    color?: string
    dataBsToggle?: string
    dataBsTarget?: string
    dataBsDismiss?: string
    children: string
  }
}