export default function Subtitle({ className, children }) {
    return (
        <h2 className={className ? `text-white ${className}` : "text-white"}>{children}</h2>
    )
}