import _ from 'lodash';
import { Timeline, TimelineDate, TimelinePanel } from '../Timeline';
import CustomHtmlSlot from './CustomHtmlSlot';
import { timelineSlotGroupShape } from '../../utils/shapes';

export default function TimelineSlot(props) {
  const items = [];
  _.each(props.groups, (group, index) => {
    items.push(<TimelineDate key={index} {...group}>{group.title}</TimelineDate>);
    _.each(group.panels, (panel, panelIndex) => {
      items.push(<TimelinePanel key={`${index}_${panelIndex}`}><CustomHtmlSlot {...panel} /></TimelinePanel>);
    });
  });
  return <Timeline>{items}</Timeline>;
}

TimelineSlot.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.shape(timelineSlotGroupShape)).isRequired
};
