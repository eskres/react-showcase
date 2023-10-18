export default function Paragraph({ className, children }) {    
    let override;
    className.includes("feedback") ? override = true : override = false

    switch (override) {
        case true:
            return <p className={className}>{children}</p>
    
        default:
            return <p className={className ? `text-white ${className}` : "text-white"}>{children}</p> 
    }
}