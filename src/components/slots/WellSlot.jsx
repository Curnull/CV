import Well from '../Well';
import Node from '../Node';
import { nodeShape } from '../../utils/shapes';

export default function WellSlot(props) {
  return <Well {...props}><Node node={props.body} /></Well>;
}

WellSlot.propTypes = {
  body: nodeShape.isRequired
};
