import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter , RouterProvider } from "react-router-dom";








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

//  eita hocche congiguration ta 
// but ei configuration ta amake karur hate tule dite hobe
//  ei configuration ta amra RouterProvider r hate tule debo tarpor RouterProvider ei configuration ta niye screen e render korbe jerom configuration e lekha ache
const appRouter = createBrowserRouter([
  {
    path: "/",
    element : <Layout/>
  },
  {
    path: "/about",
    element : <About/>

  }
]);





const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Layout />);
root.render(<Layout />);

