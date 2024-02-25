import { LOGO_URL } from "../common/constants";
import { useState,useEffect } from "react";
// import {Component} from path --> syntax for named-export

const Header = () => {
  const [loginbutton, setloginbutton] = useState("Login");

  console.log("header component called");
  /*
  jokhun ei ami login button ta click korchi tokhun setloginbutton fn ta loginbutton r  value take logout e change korche 
  and jokhun ei state variable r function ta call hocche , value update hocche tokhun ei react ei gota component take render(show/present/user ke screen dekhano) korche with updated values.


  but question ta hocche loginbutton ta toh const type r tahole update hocche ki kore ?
  ans ta hooche je jokhun setvariable r function ta call hocche tokhun ei aar ekta instance/new/copy/duplicate set variable with same-name create hoye but with updated values
  and tarpor re-render hoye ei duplicate set variable ta with updated value.
  */

  /* 
  aar ektu knowledge about useeffect hook

  // * if no dependency array => useEffect is called on every component render of the component
  // * if the dependency array is empty => useEffect is called only on the initial render(just once) of the component
  // * if the dependency array contains a dependency => useEffect is called everytime the value of the depencecy changes
  // * Dependency: A dependency can be a state variable (or) a function

  // useEffect(() => {
  //   console.log(`useEffect Called`);
  // }, [btnNameReact]);
  
  
  */

  useEffect(() => {
    console.log(`useEffect Called`);
  },[loginbutton]);
  


  return (
    <div className="header">
      <div className="app-logo">
        <img className="logo" src={LOGO_URL} alt="" />
        {/* <h1 className="logo">LOGO</h1> */}
      </div>
      <div className="links">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="but"
            onClick={() => {
              loginbutton === "Login"
                ? setloginbutton("Logout")
                : setloginbutton("Login");
            }}
          >
            {loginbutton}
          </button>
        </ul>
      </div>
    </div>
  );
};

//   export default componentname --> syntax

export default Header;
