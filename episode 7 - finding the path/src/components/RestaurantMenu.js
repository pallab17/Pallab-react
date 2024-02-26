import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  },[]);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=5934&catalog_qa=undefined&submitAction=ENTER#"
    );

    const json = await data.json();

    console.log(json);
    setresInfo(json);
  };
 
  if( resInfo === null ){
    return <Shimmer/>;
  }


  const {name,cuisines,costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info;


  const {itemCards} = resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards
  
    

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{costForTwoMessage}</h3>
      <ul>
        <li>momo</li>
        <li>chips</li>
        <li>biryani</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
