export default function Icon(props) {
  const className = `fa fa-${props.icon} ${props.extraClasses}`;
  return <i className={className} />;
}

Icon.defaultProps = {
  extraClasses: ''
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  extraClasses: PropTypes.string
};
