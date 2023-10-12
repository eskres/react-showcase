import Gear from './SVGs/Gear';
import Play from './SVGs/Play';
import Pause from './SVGs/Pause';

export default function Icon({icon}) {
  switch (icon) {
    case "gear":
      return <Gear/>
      
    case "play":
      return <Play/>

    case "pause":
      return <Pause/>

    default:
      return null;
  }
}