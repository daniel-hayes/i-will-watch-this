import React from 'react';
import './Tooltip.scss';

const Tooltip = (props) => (
  <div className="tooltip">
    {props.toolTipVal}
  </div>
);

export default Tooltip;
