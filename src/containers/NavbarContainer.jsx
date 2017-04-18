import Navbar from '../components/Navbar';
import { navbarItem } from '../utils/shapes';

export default class NavbarContainer extends React.Component {
  render() {
    return <Navbar items={this.props.items} id={this.props.id} />;
  }
}

NavbarContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(navbarItem)).isRequired,
  id: PropTypes.string.isRequired
};
