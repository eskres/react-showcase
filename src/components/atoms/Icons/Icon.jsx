import Gear from './SVGs/Gear';
import Play from './SVGs/Play';
import Pause from './SVGs/Pause';
import CalculatorIcon from './SVGs/CalculatorIcon';
import React from './SVGs/React';
import Github from './SVGs/Github';
import LinkedIn from './SVGs/LinkedIn';
import Email from './SVGs/Email';

export default function Icon({ icon }) {
  switch (icon) {
    case "gear":
      return <Gear/>
      
    case "play":
      return <Play/>

    case "pause":
      return <Pause/>

    case "calculator":
      return <CalculatorIcon/>
      
    case "react":
      return <React/>
      
    case "github":
      return <Github/>
      
    case "linkedin":
      return <LinkedIn/>
      
    case "email":
      return <Email/>

    default:
      return null;
  }
}