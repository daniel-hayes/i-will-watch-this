import React from 'react';

const AddRemoveButton = (props) => (
  <div onClick={props.handleClick}>
    {props.listStatus}
  </div>
);

export default AddRemoveButton;
