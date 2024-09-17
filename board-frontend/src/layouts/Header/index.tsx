import React from "react";
import "./style.css";

//          component: Header layout            //
export default function Header() {
  //          render: Header layout            //
  return (
    <div id="header">
      <div className="header-container">
        <div className="header-left-box">
          <div className='icon-box'></div>
          <div className='header-logo'>{'Bellflower\'s Board'}</div>
        </div>
        <div className="header-right-box"></div>
      </div>
    </div>
  );
}
