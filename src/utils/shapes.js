export const personInfo = {
  name: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export const sectionShape = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export const cvShape = PropTypes.shape({
  ...personInfo,
  sections: PropTypes.arrayOf(PropTypes.shape(sectionShape))
});


export const navbarItem = sectionShape;

export default cvShape;
