export default function Content(props) {
  return <div className="col-lg-10 col-md-9 col-sm-12">{props.children}</div>;
}

Content.defaultProps = {
  children: null
};

Content.propTypes = {
  children: PropTypes.node
};
