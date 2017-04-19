import Node from '../Node';
import { nodeShape } from '../../utils/shapes';

export default function ListSlot(props) {
  return (
    <span>
      {
        props.items.map((item, index) => {
          return [<Node key={index} node={{ ...item, type: props.of }} />, ' '];
        })
      }
    </span>
  );
}

ListSlot.propTypes = {
  of: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.any).isRequired
};
