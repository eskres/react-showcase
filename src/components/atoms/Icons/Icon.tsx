import { IconProps } from 'iconInterfaces';
import SVG from './SVGs/SVG';
import icons from "./SVGs/icons.json"

export default function Icon({ icon, className }: IconProps) {
  switch (icon) {
    case "gear":
      return <SVG 
              width={icons.gear.width}
              height={icons.gear.height}
              fill={icons.gear.fill}
              className={`${icons.gear.className} ${className}`}
              viewBox={icons.gear.viewBox}
              d={icons.gear.d}
            />
  
    case "play":
      return <SVG 
              width={icons.play.width}
              height={icons.play.height}
              fill={icons.play.fill}
              className={`${icons.play.className} ${className}`}
              viewBox={icons.play.viewBox}
              d={icons.play.d}
            />

    case "pause":
      return <SVG 
              width={icons.pause.width}
              height={icons.pause.height}
              fill={icons.pause.fill}
              className={`${icons.pause.className} ${className}`}
              viewBox={icons.pause.viewBox}
              d={icons.pause.d}
            />

    case "calculator":
      return <SVG 
              width={icons.calculator.width}
              height={icons.calculator.height}
              fill={icons.calculator.fill}
              className={`${icons.calculator.className} ${className}`}
              viewBox={icons.calculator.viewBox}
              d={icons.calculator.d}
            />

    case "react":
      return <SVG 
              width={icons.react.width}
              height={icons.react.height}
              fill={icons.react.fill}
              className={`${icons.react.className} ${className}`}
              viewBox={icons.react.viewBox}
              cx={icons.react.cx}
              cy={icons.react.cy}
              r={icons.react.r}
              d={icons.react.d}
            />

    case "github":
      return <SVG 
              width={icons.github.width}
              height={icons.github.height}
              fill={icons.github.fill}
              className={`${icons.github.className} ${className}`}
              viewBox={icons.github.viewBox}
              d={icons.github.d}
            />

    case "linkedin":
      return <SVG 
              width={icons.linkedin.width}
              height={icons.linkedin.height}
              fill={icons.linkedin.fill}
              className={`${icons.linkedin.className} ${className}`}
              viewBox={icons.linkedin.viewBox}
              d={icons.linkedin.d}
            />
  
    case "email":
      return <SVG 
              width={icons.email.width}
              height={icons.email.height}
              fill={icons.email.fill}
              className={`${icons.email.className} ${className}`}
              viewBox={icons.email.viewBox}
              d={icons.email.d}
            />

    default:
      return null;
  }
}