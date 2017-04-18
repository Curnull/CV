import { connect } from 'react-redux';
import Header from '../components/Header';
import { cvShape } from '../utils/shapes';


class HeaderContainer extends React.Component {
  render() {
    const { name, post, img, links } = this.props.cv;
    return (
      <Header
        name={name}
        post={post}
        img={img}
        links={links}
      />
    );
  }
}

HeaderContainer.propTypes = {
  cv: PropTypes.shape(cvShape).isRequired
};

export default connect((state) => { return { cv: state.cv }; })(HeaderContainer);
