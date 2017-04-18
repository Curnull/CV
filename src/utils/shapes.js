export const labelTypes = ['success', 'danger', 'info', 'warning', 'primary', 'default'];

export const personInfoShape = {
  name: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export const sectionShape = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export const linkShape = {
  title: PropTypes.string.isRequired,
  url:  PropTypes.string.isRequired
};

export const cvShape = {
  ...personInfoShape,
  links: PropTypes.arrayOf(PropTypes.shape(linkShape)),
  sections: PropTypes.arrayOf(PropTypes.shape(sectionShape))
};

export const descriptionListItemShape = {
  title: PropTypes.string.isRequired,
  titleIcon: PropTypes.string,
  value: PropTypes.string.isRequired
};

export const labelShape = {
  type: PropTypes.oneOf(labelTypes).isRequired,
  value: PropTypes.node.isRequired
};

export const labelsDescriptionListItemShape = {
  ...descriptionListItemShape,
  value: PropTypes.arrayOf(PropTypes.shape(labelShape))
};

export const timelineSlotCustomHtmlPanelShape = {
  html: PropTypes.string.isRequired
};

export const timelineSlotGroupShape = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'primary', 'default']),
  panels: PropTypes.arrayOf(PropTypes.shape(timelineSlotCustomHtmlPanelShape))
};

export const animatedCircleShape = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  colorClass: PropTypes.oneOf(labelTypes).isRequired,
  icon: PropTypes.string.isRequired
};

export const wellShape = {
  color: PropTypes.oneOf(['success', 'danger', 'info', 'warning']),
  children: PropTypes.node
};

export const navbarItem = sectionShape;
