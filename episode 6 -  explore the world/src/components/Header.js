import { LOGO_URL } from "../common/constants";
import { useState } from "react";
// import {Component} from path --> syntax for named-export 


const Header = () => {

  const[loginbutton,setloginbutton]=useState("Login");


    return (
      <div className="header">
        <div className="app-logo">
          <img
            className="logo"
            src={LOGO_URL}
            alt=""
          />
          {/* <h1 className="logo">LOGO</h1> */}
        </div>
        <div className="links">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
            <button className="but" onClick={()=>{
              setloginbutton("Logout");
             }}>{loginbutton}</button>
          </ul>
        </div>
      </div>
    );
  };

//   export default componentname --> syntax

export default Header;