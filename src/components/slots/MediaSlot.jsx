import Media from '../Media';
import CustomHtmlSlot from './CustomHtmlSlot';

export default function MediaSlot(props) {
  return <Media {...props}><CustomHtmlSlot html={props.bodyHtml} /></Media>;
}

MediaSlot.propTypes = {
  bodyHtml: PropTypes.string.isRequired
};
