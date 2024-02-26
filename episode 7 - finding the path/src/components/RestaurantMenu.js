import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setresinfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=5934&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();

    console.log(json);
    setresinfo(json.data);
  };
  return resInfo === NULL ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>name of rest</h1>
      <h2>menu</h2>
      <ul>
        <li>momo</li>
        <li>chips</li>
        <li>biryani</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
