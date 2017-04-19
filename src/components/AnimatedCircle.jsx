import Icon from './Icon';
import { animatedCircleShape } from '../utils/shapes';
import * as sass from './AnimatedCircle.sass';

export default function AnimatedCircle(props) {
  const initTooltip = (item) => {
    if (item && props.description) {
      $(item).tooltip();
    }
  };
  return (
    <div
      className={`circle circle-${props.color}`}
      data-toggle="tooltip"
      title={props.description}
      ref={initTooltip}
    >
      <Icon icon={props.icon} extraClasses={props.animation} />
      <div className="circle-desc">{props.title}</div>
    </div>
  );
}

AnimatedCircle.propTypes = animatedCircleShape;

