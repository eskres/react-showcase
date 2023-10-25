export default function Link({ href, className, style, role, ariaLabel, children}) {
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