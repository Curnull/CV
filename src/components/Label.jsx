export default function Label(props) {
  const className = `label ${props.type ? `label-${props.type}` : ''}`;
  return <span className={className}>{props.value}</span>;
}

Label.propTypes = {
  type: PropTypes.oneOf(['success', 'danger', 'info', 'warning', 'primary']).isRequired,
  value: PropTypes.node.isRequired
};
