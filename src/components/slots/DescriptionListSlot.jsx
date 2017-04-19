import _ from 'lodash';
import { descriptionListItemShape } from '../../utils/shapes';
import { DescriptionList, DescriptionListTitle, DescriptionListValue } from '../DescriptionList';
import Node from '../Node';

export default function DescriptionListSlot(props) {
  const itemsComponents = _.map(props.items, (item, index) => {
    return [
      <DescriptionListTitle key={`title_${index}`}>
        <Node node={item.title} />
      </DescriptionListTitle>,
      <DescriptionListValue key={`value_${index}`}>
        <Node node={item.value} />
      </DescriptionListValue>
    ];
  });
  return (
    <DescriptionList>
      {itemsComponents}
    </DescriptionList>
  );
}

DescriptionListSlot.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(descriptionListItemShape)).isRequired
};
