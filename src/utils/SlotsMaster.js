import customHtml from '../components/slots/CustomHtmlSlot';
import descriptionList from '../components/slots/DescriptionListSlot';
import labelsDescriptionList from '../components/slots/LabelsDescriptionListSlot';
import legendSlot from '../components/slots/LegendSlot';
import timelineSlot from '../components/slots/TimelineSlot';
import animatedCirlceSlot from '../components/slots/AnimatedCircleSlot';
import mediaSlot from '../components/slots/MediaSlot';
import wellSlot from '../components/slots/WellSlot';

const list = {
  customHtml: {
    component: customHtml
  },
  descriptionList: {
    component: descriptionList
  },
  labelsDescriptionList: {
    component: labelsDescriptionList
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
  }
};

export default (name) => {
  const item = list[name] || list[name[0].toLowerCase() + name.substr(1)];
  return item ? item.component : item;
};
