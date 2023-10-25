export default function Badge({
  color,
  className,
  children
}) {
  return (
    <span className={className ? `badge p-1 text-bg-${color} ${className}` : "badge p-1 text-bg-light"}>
        {children}
    </span>
  )
}