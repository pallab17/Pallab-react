import { LOGO_URL } from "../common/constants";
// import {Component} from path --> syntax for named-export 


const Header = () => {

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
            <button className="but">Login</button>
          </ul>
        </div>
      </div>
    );
  };

//   export default componentname --> syntax

export default Header;