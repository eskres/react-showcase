import Gear from './SVGs/Gear';
import Play from './SVGs/Play';
import Pause from './SVGs/Pause';
import Calculator from './SVGs/Calculator';
import React from './SVGs/React';
import Github from './SVGs/Github';
import LinkedIn from './SVGs/LinkedIn';
import Email from './SVGs/Email';
import { IconProps } from 'iconInterfaces';

export default function Icon({ icon, className }: IconProps) {
  switch (icon) {
    case "gear":
      return <Gear className={className}/>
      
    case "play":
      return <Play className={className}/>

    case "pause":
      return <Pause className={className}/>

    case "calculator":
      return <Calculator className={className}/>
      
    case "react":
      return <React className={className}/>
      
    case "github":
      return <Github className={className}/>
      
    case "linkedin":
      return <LinkedIn className={className}/>
      
    case "email":
      return <Email className={className}/>

    default:
      return null;
  }
}