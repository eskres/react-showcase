import React from "react";
import { BadgeProps } from "badgeInterfaces";

export default function Badge({ color, className, children }: BadgeProps): React.JSX.Element {
  return (
    <span className={className ? `badge p-1 text-bg-${color} ${className}` : "badge p-1 text-bg-light"}>
        {children}
    </span>
  )
}