import * as sass from './Media.sass';

export default function Media(props) {
  return (
    <div className="media">
      <div className="pull-left">
        <img className="media-object" src={props.img} alt={props.alt} />
      </div>
      <div className="media-body">
        <h5 className="media-heading">
          {props.title}
        </h5>
        {props.children}
      </div>
    </div>);
}

Media.defaultProps = {
  title: '',
  children: null
};

Media.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  children: PropTypes.node
};
