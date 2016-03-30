import React from 'react';
import './AddRemoveButton.scss';

const AddRemoveButton = (props) => (
  <div className="poster-action" onClick={props.handleClick}>
    <i className="icon-list-add"></i>
  </div>
);

export default AddRemoveButton;
