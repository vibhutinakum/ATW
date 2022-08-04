import React from "react";
import logo from "../../../assets/images/logo.png";

const SideBar = () => {
  return (
    <>
      <div className="sidebar">
                <div className="sidebar-wrap">
                    <a href="#" className="logo-wrap">
                        <i>
                          <img src={logo} alt="Logo" />
                        </i>
                        <span>AFTER THE WAY?</span>
                    </a>
                    <ul className="menu-list">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Community</a></li>
                        <li><a href="#">Models - Started</a></li>
                        <li><a href="#">Models - Parked</a></li>
                        <li><a href="#">Models - Need help with</a></li>
                        <li><a href="#">Models - In production</a></li>
                        <li><a href="#">Settings</a></li>
                    </ul>
                </div>
            </div>
    </>
  );
};

export default SideBar;
