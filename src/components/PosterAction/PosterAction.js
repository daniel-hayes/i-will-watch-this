import React from 'react';
import './PosterAction.scss';

let icon;

const PosterAction = (props) => {

  if (props.added) {
    icon = <i className='icon-ok'></i>;
  } else {
    if (props.addRemoveText === 'Add') {
      icon = <i className='icon-plus' onClick={props.handleClick}></i>;
    }
    if (props.addRemoveText === 'Remove') {
      icon = <i className='icon-cancel' onClick={props.handleClick}></i>;
    }
  }

  return (
    <div className="poster-action">
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
