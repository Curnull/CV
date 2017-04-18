import _ from 'lodash';
import { descriptionListItemShape } from '../../utils/shapes';
import { DescriptionList, DescriptionListTitle, DescriptionListValue } from '../DescriptionList';
import Icon from '../Icon';

export default function DescriptionListSlot(props) {
  const itemsComponents = _.map(props.items, (item, index) => {
    return [
      <DescriptionListTitle key={`title_${index}`}>
        { item.titleIcon && <Icon icon={item.titleIcon} /> } <strong>{item.title}</strong>
      </DescriptionListTitle>,
      <DescriptionListValue key={`value_${index}`}>
        <span dangerouslySetInnerHTML={{ __html: item.value }} />
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
