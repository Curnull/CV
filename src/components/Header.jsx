import './Header.sass';
import { userInfo, linkShape } from '../utils/shapes';
import Node from './Node';

export default function Header(props) {
  return (
    <div className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <a href="" className="navbar-brand">
            <img src={props.img} alt={props.name} className="img-circle" width="50" />
            <span className="name"> <Node node={props.name} /></span>
            <span className="hidden-xs"> - <Node node={props.post} /></span>
          </a>
        </div>
        <div className="hidden-xs" id="navbar-main">
          <ul className="nav navbar-nav" />
          <ul className="nav navbar-nav navbar-right">
            {
              props.links.map((link) => {
                return (
                  <li key={link.url} className={link.url === location.pathname ? 'active' : ''}>
                    <a href={link.url}><Node node={link.title} /></a>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    </div>);
}

Header.propTypes = {
  ...userInfo,
  links: PropTypes.arrayOf(PropTypes.shape(linkShape)).isRequired,
};
