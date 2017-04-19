export default function CustonHtmlSlot(props) {
  return <span dangerouslySetInnerHTML={{ __html: props.html }} />;
}

CustonHtmlSlot.propTypes = {
  html: PropTypes.string.isRequired
};
