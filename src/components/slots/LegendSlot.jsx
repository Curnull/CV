import { labelShape } from '../../utils/shapes';
import * as sass from './LegendSlot.sass';

export default function Legend(props) {
  return (
    <div>
      <hr />
      <div className="legend">
        {props.items.map((item, index) => {
          return (
            <div className="legend-item" key={index}>
              <div className={`legend-item-color ${item.type}`} /> - {item.value}
            </div>
          );
        })}
      </div>
    </div>);
}

Legend.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(labelShape)).isRequired
};
