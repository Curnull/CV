import { labelShape } from '../utils/shapes';

export default function Label(props) {
  const className = `label ${props.type ? `label-${props.color}` : ''}`;
  return <span className={className}>{props.value}</span>;
}

Label.propTypes = labelShape;
