export default function CustonHtmlSlot(props) {
  return <div dangerouslySetInnerHTML={{ __html: props.html }} />;
}

CustonHtmlSlot.propTypes = {
  html: PropTypes.string.isRequired
};
