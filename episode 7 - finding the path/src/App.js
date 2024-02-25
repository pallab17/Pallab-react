import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";







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
  return (
    <>
      <Header />
      <Body />
      <Footer/>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Layout />);

// passsing a prop to a component is same like passing arguments/parameter to a fn
// prop = properties = parameters that we pass to commponents

/*
  conflict driven ui ---

  sob kota location kolkata banga delhi te alada alada card ache offer r
  amra toh alada city r jonno alada ui banabo na
  amader website ta drive kore data i.e. our appn is driven by data
  tarmane amra ektai ui banabo aar tarpor ui ta change hobe backend theke jerom data asche setar sathe tal miliye 
  i.e. ei restaurant app e ekta ui banabo 
  ebar different city r data backend theke jokhun asbe tokhun ui ta serom behave korrbe
  i.e. ekta user A kolkata te kolkata r ui dekhbe jeitar data backend theke asche
  serom ei user b hyderabdad te hyderabdad r ui dekhbe jeitar data backend theke asche


  Config Driven UI` are based on the configurations of the data application receives. It is rather a good practice to use config driven UIs to make application for dynamic.
It is a very common & basic approach to interact with the User. It provides a generic interface to develop things which help your project scale well. It saves a lot of development time and effort.
A typical login form, common in most of the Apps. Most of these forms also get frequent updates as the requirements increase in terms of Form Validations, dropdown options,.. or design changes.





*/
