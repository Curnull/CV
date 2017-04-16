export default function Icon(props) {
  const className = `fa fa-${props.icon}`;
  return <i className={className} />;
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired
};
