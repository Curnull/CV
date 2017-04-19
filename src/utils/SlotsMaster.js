import descriptionList from '../components/slots/DescriptionListSlot';
import legendSlot from '../components/slots/LegendSlot';
import timelineSlot from '../components/slots/TimelineSlot';
import animatedCirlceSlot from '../components/slots/AnimatedCircleSlot';
import mediaSlot from '../components/slots/MediaSlot';
import wellSlot from '../components/slots/WellSlot';
import listSlot from '../components/slots/ListSlot';
import labelSlot from '../components/slots/LabelSlot';
import iconSlot from '../components/slots/IconSlot';


const list = {
  descriptionList: {
    component: descriptionList
  },
  legend: {
    component: legendSlot
  },
  timeline: {
    component: timelineSlot
  },
  animatedCircle: {
    component: animatedCirlceSlot
  },
  media: {
    component: mediaSlot
  },
  well: {
    component: wellSlot
  },
  list: {
    component: listSlot
  },
  label: {
    component: labelSlot
  },
  icon: {
    component: iconSlot
  }
};

export default (name) => {
  const item = list[name] || list[name[0].toLowerCase() + name.substr(1)];
  return item ? item.component : item;
};
