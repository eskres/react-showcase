import { HeadingProps } from "headingsInterfaces"

export default function Heading({ heading, className, children }: HeadingProps): React.JSX.Element | null {
  switch (heading) {
    case 1:
      return <h1 className={className ? `text-white ${className}` : "text-white"}>{children}</h1>
    case 2:
      return <h2 className={className ? `text-white ${className}` : "text-white"}>{children}</h2>
    case 3:
      return <h3 className={className ? `text-white ${className}` : "text-white"}>{children}</h3>
    case 4:
      return <h4 className={className ? `text-white ${className}` : "text-white"}>{children}</h4>
    case 5:
      return <h5 className={className ? `text-white ${className}` : "text-white"}>{children}</h5>
    case 6:
      return <h6 className={className ? `text-white ${className}` : "text-white"}>{children}</h6>
    default:
      return null;
  }
}