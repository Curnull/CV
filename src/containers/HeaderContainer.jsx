import { connect } from 'react-redux';
import Header from '../components/Header';
import { cvShape } from '../utils/shapes';


class HeaderContainer extends React.Component {
  render() {
    const { name, post, img } = this.props.cv;
    return (
      <Header
        name={name}
        post={post}
        img={img}
      />
    );
  }
}

HeaderContainer.propTypes = {
  cv: cvShape.isRequired
};

export default connect((state) => { return { cv: state.cv }; })(HeaderContainer);
