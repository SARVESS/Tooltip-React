import React from 'react';

// Dropdown Component to select direction
const Dropdown = (props) => {
  return (
    <div className="dropdown-div">
      <label  id="label">Choose a direction:</label>

      <select name="directions" id="direction" className="drop-down">
        <option value="top">Top</option>
        <option value="bottom">Bottom</option>
        <option value="left">Left</option>
        <option value="right">Right</option>
      </select>
    </div>
  );
};

export default Dropdown;
