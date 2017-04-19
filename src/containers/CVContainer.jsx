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
  constructor(...args) {
    super(...args);
    this.navbarId = 'left-navbar';
    this.onRenderMainContainer = this.onRenderMainContainer.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cv) {
      $('.loading').addClass('transparent');
      setTimeout(() => {
        $('.loading').remove();
      }, 1500);
      $('body').removeClass('no-overflow');
    }
  }

  onRenderMainContainer() {
    $('body').scrollspy({ target: `#${this.navbarId}` });
    $(`#${this.navbarId} ul`).affix({
      offset: {
        top: 80
      }
    });
    // Jump to current(from hash) section after rendering of all sections
    const hash = location.hash;
    location.hash = '';
    location.hash = hash;
  }

  render() {
    if (!this.props.cv) {
      let cvLink = location.pathname;
      cvLink = cvLink[0] === '/' ? cvLink.substring(1) : cvLink;
      this.props.fetchCV(cvLink);
      return null;
    }
    const navbarItems = _.map(this.props.cv.sections, (section) => {
      return { name: section.name, title: section.title, icon: section.icon };
    });

    return (
      <div>
        <HeaderContainer />
        <MainContainer ref={this.onRenderMainContainer}>
          <NavbarContainer items={navbarItems} id={this.navbarId} />
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
  cv: PropTypes.shape(cvShape),
  fetchCV: PropTypes.func.isRequired
};

export default connect((state) => { return { cv: state.cv }; }, mapDispatchToProps)(CVContainer);
