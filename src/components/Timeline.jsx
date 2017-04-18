import * as sass from './Timeline.sass';

export function Timeline(props) {
  return <ul className="timeline">{props.children}</ul>;
}

Timeline.defaultProps = {
  children: null
};

Timeline.propTypes = {
  children: PropTypes.node
};


export function TimelineDate(props) {
  return <li className={`tldate ${props.type}`}>{props.children}</li>;
}

TimelineDate.defaultProps = {
  type: 'default',
  children: null
};

TimelineDate.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node
};


export function TimelinePanel(props) {
  return (
    <li>
      <div className="tl-circ">
        <i className="fa fa-check" aria-hidden="true" />
      </div>
      <div className="timeline-panel">
        <div className="tl-body">
          {props.children}
        </div>
      </div>
    </li>);
}

TimelinePanel.defaultProps = {
  children: null
};

TimelinePanel.propTypes = {
  children: PropTypes.node
};
