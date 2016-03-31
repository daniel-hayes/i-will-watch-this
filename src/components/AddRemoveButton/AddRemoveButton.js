import React from 'react';
import './AddRemoveButton.scss';

const AddRemoveButton = (props) => (
  <div className="poster-action">
  	<div className="poster-action-inner text-center">
  		<p>Add to saved movies</p>
    	<i className="icon-plus" onClick={props.handleClick}></i>
    </div>
  </div>
);

export default AddRemoveButton;
