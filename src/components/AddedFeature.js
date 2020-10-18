import React from 'react';
import { removeFeature } from '../Actions/RemoveAction';
import { connect } from 'react-redux';
  
const AddedFeature = (props) => {
  console.log("AddedFeature", props);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => props.removeFeature(props.feature)}>
        X
        </button>
      {props.feature.name}
    </li>
  );
};
const mapDispatchToProps = {removeFeature };
export default connect(null, mapDispatchToProps)(AddedFeature);
