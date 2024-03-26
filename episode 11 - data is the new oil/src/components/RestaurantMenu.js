import React from "react";
import useRestaurant from "../common/useRestaurant";
import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
/*
So basically this restaurant menu component is not following the
 single responsibility function such that we will make this component follow 
 the single responsibility function purpose and to make that so we will 
 make our custom hook such that this restaurant menu component will 
  consist of two jobs. One is fetching the API that is fetching the data and
   taking that data and rendering it on the screen to make it a single responsibility
    function we need to make the component perform only have one function such that we will 
    make our custom hook and inside that hook we will actually write our API fetching 
    method such that this restaurant component only has to render the data that will 
    be passed from the hook to this component and the only job of restaurant menu 
    component will be to render this data on the screen such that this component now 
    becomes a single responsibility function component and in this way our code will 
    become more familiar, more modular and more readable.

*/
const RestaurantMenu = () => {
  const { resID } = useParams();
  console.log(resID);
  //So basically we are here declaring and. variable and naming it as rest info and we are using our own custom hook use restaurant hook. And in that hook via passing the restaurant id. Now in that hook when we pass that particular restaurant ID, the information of that restaurant is being fetched by our api. And after that. the information that we are getting from. using our own custom hook that information we are storing in this variable.
  const resInfo = useRestaurant(resID);
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info;
    // resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card
    //   ?.card?.itemCards[0]?.card?.info;
  // resInfo?.data?.cards[2]?.card?.card?.info;

  // data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info
  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card;
  // resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //   ?.card;
  // data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards

  console.log(itemCards);
  // data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards

  // const { defaultPrice, price } = itemCards?.card?.info;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines}</h2>
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
