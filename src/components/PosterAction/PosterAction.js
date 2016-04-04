import React from 'react';
import Tooltip from '../Tooltip';
import './PosterAction.scss';

let icon;

const PosterAction = (props) => {

  if (props.added) {
    icon = <i className='icon-ok action'></i>;
  } else {
    if (props.addRemoveText === 'Add') {
      icon = <i className='icon-plus action' onClick={props.handleClick}></i>;
    }
    if (props.addRemoveText === 'Remove') {
      icon = <i className='icon-cancel action' onClick={props.handleClick}></i>;
    }
  }

  return (
    <div className="poster-action">
      {props.overview ? <div className="info-wrapper tooltip-wrapper"><i className="icon-info"></i><Tooltip toolTipVal={props.overview} /></div> : null}
      <div className="poster-action-inner text-center">
        <p>
          {props.added ? 'Added' : props.addRemoveText}
          <span>
            {icon}
          </span>
        </p>
      </div>
    </div>
  );
};

export default PosterAction;
