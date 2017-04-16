import _ from 'lodash';
import Content from '../components/Content';
import Section from '../components/Section';
import getSlotComponent from '../utils/SlotsMaster';
import { sectionShape } from '../utils/shapes';


export default class ContentContainer extends React.Component {
  render() {
    const sections = _.map(this.props.sections, (section) => {
      const slots = _.map(section.slots, (slot, index) => {
        const SlotComponent = getSlotComponent(slot.type);
        if (!SlotComponent) {
          throw new Error(`Slot ${slot.type} not found!`);
        }
        const props = { ...slot, key: index };
        return <SlotComponent {...props} />;
      });
      return (
        <Section
          title={section.title}
          icon={section.icon}
          name={section.name}
          key={section.name}
        >
          {slots}
        </Section>
      );
    });
    return <Content>{sections}</Content>;
  }
}

ContentContainer.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape(sectionShape)).isRequired
};
