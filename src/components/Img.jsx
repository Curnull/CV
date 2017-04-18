export default function Img(props) {
  return (
    <img
      {...props}
      src={(props.serverUrl || SERVER_ADDR) + props.src}
      alt={props.alt}
    />);
}

Img.defaultProps = {
  serverUrl: null
};

Img.propTypes = {
  serverUrl: PropTypes.string,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};
