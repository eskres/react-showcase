declare module "headingsInterfaces" {
  export interface HeadingProps {
    heading: number;
    className?: string;
    children: string | React.JSX.Element;
  }
}