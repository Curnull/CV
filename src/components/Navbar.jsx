import Icon from './Icon';
import './Navbar.sass';
import { navbarItem } from '../utils/shapes';

export default function Navbar(props) {
  return (
    <div id="left-navbar" className="col-lg-2 col-md-3 hidden-sm hidden-xs">
      <ul
        className="nav nav-pills nav-stacked"
        data-offset-top="80"
        data-spy="affix" role="tablist"
      >
        {
          props.items.map((item, index) => {
            return (
              <li key={name}>
                <a href={`#${item.name}`}>
                  <Icon icon={item.icon} /> {item.title}
                </a>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

Navbar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(navbarItem)).isRequired
};
