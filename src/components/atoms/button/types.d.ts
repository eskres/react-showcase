declare module "buttonInterfaces" {
  export interface ButtonProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any;
    type?: "button" | "submit" | "reset" | undefined;
    value: string
    icon?: string
    color?: string
    className?: string
    dataBsToggle?: string
    dataBsTarget?: string
    dataBsDismiss?: string
    children: string
  }
}