import { LinkProps } from "linkInterfaces";

export default function Link({ href, className, style, role, ariaLabel, children}: LinkProps): React.JSX.Element {
  return (
    <a
      href={href}
      className={className ? `link-light ${className}` : "link-light"}
      style={style}
      role={role}
      aria-labelledby={ariaLabel}>
        {children}
      </a>
  )
}