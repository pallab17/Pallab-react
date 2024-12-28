import { LOGO_URL } from "../common/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../common/useOnlineStatus";
import UserContext from "../common/UserContext";
import { useSelector } from "react-redux";
// import {Component} from path --> syntax for named-export

const Header = () => {
  const [loginbutton, setloginbutton] = useState("Login");

  const status = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  // subscribing to the store using a selector --> redux store r mal guno r data dekhte gele we need selector --> basically reading data
  const cartItems = useSelector((store)=>store.cart.items);
  console.log(cartItems);


  // console.log("header component called");
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

  // useEffect(() => {
  //   console.log(`useEffect Called`);
  // }, [loginbutton]);

  return (
    <div className="flex justify-between  bg-yellow-100 ">
      <div className="app-logo">
        <Link to="/">

        <img className="w-20" src={LOGO_URL} alt="" />
        </Link>
        {/* <h1 className="logo">LOGO</h1> */}
      </div>
      <div className="flex items-center ">
        <ul className="flex m-4 p-4 ">
        <li className="px-4">
          Online Status : {status ? "✅": "🔴"}
          {/* So basically, we're using our own custom hook to check the online status. And now we are using that custom hook over here to show a green teak when the user is having a Internet connectivity. And when the Internet is off the browser or the homepage will be shown a red dot with the   H1 tag that states that Oma. Internet nei. */}
        </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
            {/* <a href="/about">About</a> */}
            {/* <a href="/about">About</a>    one way to create a route/rasta to about page
            i.e. About e click hole about page e niye jabe ei anchor tag ta href r sathe mixed hoye
            but problem ta hocche je reload hocche gota page ta that we dont want
            so we will use links react-router-dom has provided us which ony refreshes the component

            thats why it is called single page applications spa --> all the routing is just about component exchanging themselves 
             
             ## Q: What is `SPA`?

A: `Single Page Application (SPA)` is a web application that dynamically updates the webpage with data from web server without reloading/refreshing the entire page. All the HTML, CSS, JS are retrieved in the initial load and other data/resources can be loaded dynamically whenever required. An SPA is sometimes referred to as a `single-page interface (SPI)`.

## Q: What is the difference between `Client Side Routing` and `Server Side Routing`?

A: In `Server-side routing or rendering (SSR)`, every change in URL, http request is made to server to fetch the webpage, and replace the current webpage with the older one.

In `Client-side routing or rendering (CSR)`, during the first load, the webapp is loaded from server to client, after which whenever there is a change in URL, the router library navigates the user to the new page without sending any request to backend. All `Single Page Applications uses client-side routing`.

             
             */}
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold">
          Cart - ({cartItems.length} items)
          </li>
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
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

//   export default componentname --> syntax

export default Header;
