import { sectionShape } from '../utils/shapes';
import Icon from './Icon';
import * as sass from './Section.sass';

export default function Section(props) {
  return (
    <div className="row section" id={props.name}>
      <div className="col-lg-12">
        <h4>
          <Icon icon={props.icon} /> {props.title}
        </h4>
        <hr />
      </div>
      <div className="col-lg-12">
        {props.children}
        <br />
      </div>
    </div>
  );
}

Section.propTypes = sectionShape;
