import React from 'react';

const AddRemoveButton = (props) => (
  <div onClick={props.handleClick}>
    {console.log(props)}
    {props.listStatus}
  </div>
);

export default AddRemoveButton;
