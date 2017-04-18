import _ from 'lodash';
import { labelsDescriptionListItemShape } from '../../utils/shapes';
import { DescriptionList, DescriptionListTitle, DescriptionListValue } from '../DescriptionList';
import Icon from '../Icon';
import Label from '../Label';

export default function LabelsDescriptionListSlot(props) {
  const itemsComponents = _.map(props.items, (item, index) => {
    const labelsAndSpaces = [];
    _.each(item.value, (label, index) => {
      labelsAndSpaces.push(<Label key={`label_${index}`} {...label} />);
      labelsAndSpaces.push(' ');
    });

    return [
      <DescriptionListTitle key={`title_${index}`}>
        { item.titleIcon && <Icon icon={item.titleIcon} /> } <strong>{item.title}</strong>
      </DescriptionListTitle>,
      <DescriptionListValue key={`value_${index}`}>
        {labelsAndSpaces}
      </DescriptionListValue>
    ];
  });
  return (
    <DescriptionList>
      {itemsComponents}
    </DescriptionList>
  );
}

LabelsDescriptionListSlot.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(labelsDescriptionListItemShape)).isRequired
};
