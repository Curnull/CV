import _ from 'lodash';
import getSlotComponent from '../utils/SlotsMaster';
import CustomHtml from './slots/CustomHtmlSlot';
import { nodeShape } from '../utils/shapes';

export default function Node(props) {
  const node = props.node;
  if (_.isString(node)) {
    return <CustomHtml html={node} />;
  }

  if (_.isArray(node)) {
    return <span>{_.map(node, (n, index) => <Node node={n} key={index} />)}</span>;
  }

  if (_.isObject(node)) {
    const SlotComponent = getSlotComponent(node.type);
    if (!SlotComponent) {
      return React.createElement(node.type, node.props, <Node node={node.children} />);
    }
    return <SlotComponent {...node} />;
  }
  return null;
}

Node.propTypes = {
  node: nodeShape.isRequired
};
