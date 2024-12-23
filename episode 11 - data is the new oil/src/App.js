import React, { Suspense, lazy, useEffect, useState,useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
//import Grocery from "./components/Grocery";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";

// import Shimmer from "./components/Shimmer";
//import Shimmer from "./components/Shimmer";

import UserContext from "./common/UserContext";


const Grocery = lazy(() => import("./components/Grocery"));

const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright &copy; {currYear}, Made with 💗 by <strong>Pb7</strong>
      </p>
    </footer>
  );
};
const Layout = () => {
  const[userName,setUserName] =  useState();

  useEffect(()=>{
    // gugul authentication kore user name aar password match korchi tarpor username store kore rakhchi

    const data ={
      name:"Pallab",
    }
    setUserName(data.name);
  },[]);

  return (
    // <>
    <UserContext.Provider value={{loggedInUser: userName}}>

      <Header />
      <Outlet />

    </UserContext.Provider>
      // {/* <Body /> */}

      /* <Outlet/> outlet hocche sei fn ta basically help kore amader 
      outlet r jayega te onno component ke bosiye dite according to the url 
      eg 
      1.   page = / thakle home pg so  prothome outlet component r jayega te body component swap hoye chole asbe tarpor screen e  header r por body component load hobe
      2.   page = /about thakle about pg so  prothome outlet component r jayega te about component swap hoye chole asbe tarpor screen e  header r por about component load hobe
      3.   page = /contact thakle contact pg so  prothome outlet component r jayega te contact component swap hoye chole asbe tarpor screen e  header r por contact component load hobe

       */

      /* <Footer /> */
    // </>
  );
};

//  eita hocche congiguration ta
// but ei configuration ta amake karur hate tule dite hobe
//  ei configuration ta amra RouterProvider r hate tule debo tarpor RouterProvider ei configuration ta niye screen e render korbe jerom configuration e lekha ache
// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element : <Layout/>,
//     errorElement: <Error/>,
//     // errorElement: <Error/>,  user kono ulto palta url khulte chaile ei error component ta screen e render hobe
//   },
//   {
//     path: "/about",
//     element : <About/>

//   },
//   {
//     path: "/contact",
//     element : <Contact/>,
//   },
// ]);

// children route concept ta banabo that is header component ta fixed thakbe tarpor url unujai component load hobe
//  that is header sob kota page r oporei thakbe
//  kintu page = / thakle home pg so header r por body component load hobe
//  kintu page = /about thakle about pg so header r por about component load hobe
//  kintu page = /contact thakle contact pg so header r por contact component load hobe
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>loading.......</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resID",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
    // errorElement: <Error/>,  user kono ulto palta url khulte chaile ei error component ta screen e render hobe
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Layout />);

// tarpor jehetu RouterProvider r kache puro congiguration ta ache tai otai amra pass korchi (with our own made configuration stored inside appRouter)  root e
// jate RouterProvider ei home-screen e render hoye with our made configuration
// configuration === kon page e kon component render hobe
root.render(<RouterProvider router={appRouter} />);
