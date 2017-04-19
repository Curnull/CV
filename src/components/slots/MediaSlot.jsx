import Media from '../Media';
import Node from '../Node';
import { nodeShape } from '../../utils/shapes';

export default function MediaSlot(props) {
  return <Media {...props}><Node node={props.body} /></Media>;
}

MediaSlot.propTypes = {
  body: nodeShape.isRequired
};
