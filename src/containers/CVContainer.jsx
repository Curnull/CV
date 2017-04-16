import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import MainContainer from '../components/MainContainer';
import NavbarContainer from './NavbarContainer';
import HeaderContainer from './HeaderContainer';
import ContentContainer from './ContentContainer';
import { cvShape } from '../utils/shapes';

import * as actions from '../actions/CVActions';

export class CVContainer extends React.Component {
  render() {
    if (!this.props.cv) {
      this.props.fetchCV(location.pathname.replace('/', ''));
      return null;
    }
    const navbarItems = _.map(this.props.cv.sections, (section) => {
      return { name: section.name, title: section.title, icon: section.icon };
    });
    return (
      <div>
        <HeaderContainer />
        <MainContainer>
          <NavbarContainer items={navbarItems} />
          <ContentContainer sections={this.props.cv.sections} />
        </MainContainer>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCV: bindActionCreators(actions.fetchCV, dispatch)
  };
}

CVContainer.defaultProps = {
  cv: null
};

CVContainer.propTypes = {
  cv: cvShape,
  fetchCV: PropTypes.func.isRequired
};

export default connect((state) => { return { cv: state.cv }; }, mapDispatchToProps)(CVContainer);
