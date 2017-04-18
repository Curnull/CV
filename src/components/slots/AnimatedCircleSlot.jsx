import AnimatedCircle from '../AnimatedCircle';
import { animatedCircleShape } from '../../utils/shapes';

export default function AnimatedCircleSlot(props) {
  return <AnimatedCircle {...props} />;
}


AnimatedCircleSlot.propTypes = animatedCircleShape;
