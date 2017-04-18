export default function MainContainer(props) {
  return (
    <div className="container">
      <div className="row">
        {props.children}
      </div>
    </div>);
}

MainContainer.defaultProps = {
  children: null
};

MainContainer.propTypes = {
  children: PropTypes.node
};
