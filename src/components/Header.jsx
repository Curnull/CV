import './Header.sass';
import { userInfo } from '../utils/shapes';

export default function Header(props) {
  return (
    <div className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <a href="../" className="navbar-brand">
            <img src={SERVER_ADDR + props.img} alt={props.name} className="img-circle" width="50" />
            <span className="name"> {props.name}</span>
            <span className="hidden-xs"> - {props.post}</span>
          </a>
        </div>
        <div className="navbar-collapse collapse" id="navbar-main">
          <ul className="nav navbar-nav" />
          <ul className="nav navbar-nav navbar-right" />
        </div>
      </div>
    </div>);
}

Header.propTypes = {
  ...userInfo
};
