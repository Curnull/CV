import _ from 'lodash';
import { Timeline, TimelineDate, TimelinePanel } from '../Timeline';
import CustomHtmlSlot from './CustomHtmlSlot';
import { timelineSlotGroupShape } from '../../utils/shapes';
import Node from '../Node';

export default function TimelineSlot(props) {
  const items = [];
  _.each(props.groups, (group, index) => {
    items.push(<TimelineDate key={index} {...group}>
      <Node node={group.title} />
    </TimelineDate>);
    _.each(group.panels, (panel, panelIndex) => {
      items.push(<TimelinePanel key={`${index}_${panelIndex}`}>
        <Node node={panel} />
      </TimelinePanel>);
    });
  });
  return <Timeline>{items}</Timeline>;
}

TimelineSlot.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.shape(timelineSlotGroupShape)).isRequired
};
