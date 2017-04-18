export function DescriptionList(props) {
  return (
    <dl className="dl-horizontal">
      {props.children}
    </dl>
  );
}

DescriptionList.defaultProps = {
  children: null
};

DescriptionList.propTypes = {
  children: PropTypes.node
};

export function DescriptionListTitle(props) {
  return <dt>{props.children}</dt>;
}

DescriptionListTitle.defaultProps = {
  children: null
};

DescriptionListTitle.propTypes = {
  children: PropTypes.node
};

export function DescriptionListValue(props) {
  return <dd>{props.children}</dd>;
}

DescriptionListValue.defaultProps = {
  children: null
};

DescriptionListValue.propTypes = {
  children: PropTypes.node
};
