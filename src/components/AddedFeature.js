import React from 'react';
import { useSelector } from 'react-redux';

const AddedFeature = props => {
  const AddedReducer = useSelector(state => state.AddedReducer);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick = {AddedReducer}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
