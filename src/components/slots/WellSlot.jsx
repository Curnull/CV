import Well from '../Well';
import CustomSlot from './CustomHtmlSlot';

export default function WellSlot(props) {
  return <Well {...props}><CustomSlot {...props} /></Well>;
}
