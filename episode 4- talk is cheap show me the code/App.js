import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="app-logo">
        <img
          className="logo"
          src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-restaurant-logo-design-vector-template-png-image_5441058.jpg"
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
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = (prop) => {
  const {resName,cuisine} = prop;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0f0" }}>
      <img
        className="res-logo"
        src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/03/08174730/Swiggy.jpg"
        alt="res-logo"
      />
      {/* <h3> PB7 foods</h3>
      <h4>Indian,Pizza</h4>
      <h4>4.7 stars</h4>
      <h4>30 minutes</h4> */}
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.7 stars</h4>
      <h4>30 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <>
      <div className="body">
        <div className="search">search</div>
        <div className="restaurant-container">
          <RestaurantCard 
            resName = "PB7 foods"   // prop eita 
            cuisine = "Indian,Pizza"  // react ei sobkota 
          />
          <RestaurantCard />
          
        </div>
      </div>
    </>
  );
};
const Layout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Layout />);
   


// passsing a prop to a component is same like passing arguments/parameter to a fn
// prop = properties = parameters that we pass to commponents