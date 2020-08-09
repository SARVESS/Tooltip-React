import React from 'react';

const Tooltip = (props) => {
  const { onMouseIn, onMouseOut, hover } = props;
  const styleToolTip = {
    display: hover ? 'block' : 'none'    
  }
  return (
    <div className="tooltip-div">
      <button
        className="tooltip-button"
        onMouseOver={() => onMouseIn()}
        onMouseOut={() => onMouseOut()}
      >
        Hover Over Me
      </button>
      <div> Who are You? </div>
    </div>
  );
};

export default Tooltip;
