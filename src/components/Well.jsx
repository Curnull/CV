import { wellShape } from '../utils/shapes';
import * as sass from './Well.sass';

export default function Well(props) {
  return (
    <div className={`well well-${props.color}`} role="alert">
      {props.children}
    </div>);
}

Well.propTypes = wellShape;

