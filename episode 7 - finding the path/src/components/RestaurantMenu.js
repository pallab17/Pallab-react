import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../common/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  // const params = useParams();
  // const {resID} = params;
  // console.log(resID);
  // console.log(params);
  const { resID } = useParams();
  console.log(resID);
  const [resInfo, setresInfo] = useState(null);

  // console.log(resId);
  // useParams() fn ta basically amader restaurant id ta store korte help kore jei id ta url r pashe screen e render hocche

  useEffect(() => {
    fetchMenu();
  }, []);

  // 651011
  // 692058

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API + resID 
      // + "&catalog_qa=undefined&submitAction=ENTER"

      // MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
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
    resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  console.log(itemCards);
  // data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards

  // const { defaultPrice, price } = itemCards?.card?.info;

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
        {itemCards?.map((p) => (
          <li key={p.card.info.id}>
            {p.card.info.name} - {" Rs."}
            {p.card.info.defaultPrice || p.card.info.price}
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
