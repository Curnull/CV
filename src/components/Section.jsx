import { sectionShape } from '../utils/shapes';
import Icon from './Icon';

export default function Section(props) {
  return (
    <div className="row" id={props.name}>
      <div className="col-lg-12">
        <h4>
          <Icon icon={props.icon} /> {props.title}
        </h4>
        <hr />
      </div>
      <div className="col-lg-12">
        {props.children}
      </div>
    </div>
  );
}

Section.propTypes = sectionShape;
