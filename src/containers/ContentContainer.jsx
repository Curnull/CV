import _ from 'lodash';
import Content from '../components/Content';
import Section from '../components/Section';
import Node from '../components/Node';
import { sectionShape } from '../utils/shapes';


export default class ContentContainer extends React.Component {
  render() {
    const sections = _.map(this.props.sections, (section) => {
      return (
        <Section
          title={section.title}
          icon={section.icon}
          name={section.name}
          key={section.name}
        >
          <Node node={section.slots} />
        </Section>
      );
    });
    return <Content>{sections}</Content>;
  }
}

ContentContainer.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape(sectionShape)).isRequired
};
