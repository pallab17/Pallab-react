import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../common/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);

  const { resId } = useParams();
  // console.log(resId);
  // useParams() fn ta basically amader restaurant id ta store korte help kore jei id ta url r pashe screen e render hocche

  useEffect(() => {
    fetchMenu();
  }, []);

  // 651011

  const fetchMenu = async () => {
    const data = await fetch(
       +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();

    console.log(json);
    setresInfo(json);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  const { defaultPrice } = itemCards[0].card.info;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {/* map() fn uses callback fn
      i.e.syntax of callbcak fn  () => ()
       */}

        {/* arrow fn r syntax hocche
              ()=>{}
        */}
        {itemCards.map((p) => (
          <li key={p.card.info.id}>
            {p.card.info.name} - {" Rs."}
            {defaultPrice}
          </li>
        ))}
        {/* <li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[1].card.info.name}</li>
        <li>{itemCards[2].card.info.name}</li> */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
