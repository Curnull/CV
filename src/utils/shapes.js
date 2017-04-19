export const labelTypes = ['success', 'danger', 'info', 'warning', 'primary', 'default'];

function lazyFunction(f) {
  return function (...args) {
    return f().apply(this, ...args);
  };
}

export const nodeShape = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.arrayOf(PropTypes.any),
  PropTypes.shape({
    type: PropTypes.string.isRequired
  })
]);

export const personInfoShape = {
  name: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export const sectionShape = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  slots: nodeShape
};

export const linkShape = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export const cvShape = {
  ...personInfoShape,
  links: PropTypes.arrayOf(PropTypes.shape(linkShape)),
  sections: PropTypes.arrayOf(PropTypes.shape(sectionShape))
};

export const descriptionListItemShape = {
  title: nodeShape.isRequired,
  value: nodeShape.isRequired
};

export const labelShape = {
  color: PropTypes.oneOf(labelTypes).isRequired,
  value: PropTypes.node.isRequired
};

export const timelineSlotGroupShape = {
  title: nodeShape.isRequired,
  type: PropTypes.oneOf(['success', 'primary', 'default']),
  panels: PropTypes.arrayOf(nodeShape)
};

export const animatedCircleShape = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  color: PropTypes.oneOf(labelTypes).isRequired,
  icon: PropTypes.string.isRequired
};

export const wellShape = {
  color: PropTypes.oneOf(['success', 'danger', 'info', 'warning']),
  children: PropTypes.node
};

export const navbarItem = sectionShape;
