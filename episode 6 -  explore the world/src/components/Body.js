import {useState,useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../common/mockdata";


const Body = () => {

  
   const[listOfRestaurants,setListOfRestaurants] = useState(resList);   

  /* useEffect sikhchi 
  useeffecr hook - useeffect();
  import from react as a named import
  useEffect(argument1 ,argument2);
  argument 1 - callback fn jeita execute hoye after the component renders 
  here body component render howar por ei callback fn ta render hobe
  argument 2- dependency array


  */
 useEffect(()=>{
  fetchData(); // ekta fn banachi jeitar modhe logic likhbo to fetch live data from swiggy

 },[]);

//  const fetchData = () => {
//   const data = fetch(
//     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&collection=83647&tags=layout_CCS_Chinese&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
//   );
//   // fetch(); ei fetch fn ta data fetch kore anbe from api - swiggy r api
//   // and it will return a promise
//   // so we have to resolve a promise
//   // method 1 traditional - then method with catch method to handle errors
//   // method 2 - industry practice - async await function 
//  }

   const fetchData = async() => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&collection=83647&tags=layout_CCS_Chinese&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    )
// conve

   }


  
  return (
    <>
      <div className="body">
        {/* <div className="search">search</div> */}
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              // ekhane logic ta amake bhabte + likhte hobe 
              // logic will contain--> je bhai button ta click korle only top rated restaurant screen e dekhabe
              //console.log("button clicked");
              // listOfRestaurants = listOfRestaurants.filter(
              //   (r)=>r.data.avgRating>4
              // );
              // console.log(listOfRestaurants);
              const filteredList = listOfRestaurants.filter(
                (r)=>r.data.avgRating>4.2
                // filteredlist bole ekta var banachi jeitar modhe ami listofRestaurants take update korchi according to their avg rating 
                
              );
              setListOfRestaurants(filteredList); // tarpor ei filteredlist takei pass kore dicchi setlistofrestaurants r modhe such that original list of restuarants ta update hoye jaye when the top rated restaurant button is clicked

            }}
          >
            Top Rated Restaurants
          </button>
          <button
           className="filter-btn"
           onClick={
            ()=>{
              const filteredList = listOfRestaurants.filter(
                (r)=>r.data.deliveryTime < 20
              );
              setListOfRestaurants(filteredList);

            }
           }
          >
          Fast deliveryTime
            
          </button>
        </div>
        <div className="restaurant-container">
          {listOfRestaurants.map((element) => (
            <RestaurantCard key={element.data.id} resData={element} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
