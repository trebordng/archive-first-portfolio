import React, { useState } from "react";
import "./Popup.css";
function Popup(props) {
  
  
  return props.trigger ? (
    <div className="popup">
      <div className="innerPopup">
        <button className="closeBtn" onClick={()=>props.setTrigger(false)}><span>Close</span></button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
