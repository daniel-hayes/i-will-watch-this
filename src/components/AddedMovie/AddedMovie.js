import React from 'react';
import './AddedMovie.scss';

//<p>{added}</p>
//className={icon}

const AddedMovie = (props) => (
  <div className="poster-action">
    <div className="poster-action-inner text-center">
      <p>{props.addRemoveText}</p>
      <i onClick={props.addRemove.bind(null, props.movies)}></i>
    </div>
  </div>
);

export default AddedMovie;
