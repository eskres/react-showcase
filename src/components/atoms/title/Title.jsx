export default function Title({ className, children }) {
    return (
        <h1 className={className ? `text-white ${className}` : "text-white"}>{children}</h1>
    )
}