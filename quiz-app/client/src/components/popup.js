
import React from "react";
 
const Popup = ({handleClose, content}) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>x</span>
        <br></br><br></br>
        {content}
      </div>
    </div>
  );
};
 
export default Popup;