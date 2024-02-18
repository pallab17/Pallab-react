import {useState} from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../common/mockdata";


const Body = () => {

  // method 1  - destructured in a single line
  // const[listOfRestaurants,setListOfRestaurants] = useState(resList);   eita ke onno bahbe o ekha jaye in simple terms 

  // method 2 
  //  useState() fn ta jehetu ekta array arr provide korche amader so we can write 
  const arr = useState(resList);
  // now this array arr contains 2 elements listOfRestaurants,setListOfRestaurants
  // i.e
   const listOfRestaurants = arr[0];
   const setListOfRestaurants = arr[1];

  //  method 3  
    //  useState() fn ta jehetu ekta array arr provide korche amader so we can write 
  // const arr = useState(resList);
  // now this array arr contains 2 elements listOfRestaurants,setListOfRestaurants
   // const[listOfRestaurants,setListOfRestaurants] = arr;   // destructuring here
   



//   const[listOfRestaurants,setListOfRestaurants] = useState([{
//     type: 'restaurant',
//     data: {
//       id: '334475',
//       name: 'KFC',
//       cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
//       cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
//       costForTwo: 40000,
//       deliveryTime: 36,
//       avgRating: '3.8',
//     },
//   },
//   {
//     type: 'restaurant',
//     data: {
//       id: '334476',
//       name: 'Dominos',
//       cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
//       cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
//       costForTwo: 40000,
//       deliveryTime: 36,
//       avgRating: '4.8',
//     },
//   },
//   {
//     type: 'restaurant',
//     data: {
//       id: '334477',
//       name: 'McDonals',
//       cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
//       cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
//       costForTwo: 40000,
//       deliveryTime: 36,
//       avgRating: '4.2',
//     },
//   }
// ]);

  // swiggy r whole api use na kore just 2-3 te use korchi for understanding hooks
  // let listOfRestaurants = [
  //   {
  //     type: 'restaurant',
  //     data: {
  //       id: '334475',
  //       name: 'KFC',
  //       cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
  //       cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: '3.8',
  //     },
  //   },
  //   {
  //     type: 'restaurant',
  //     data: {
  //       id: '334476',
  //       name: 'Dominos',
  //       cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
  //       cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: '4.8',
  //     },
  //   },
  //   {
  //     type: 'restaurant',
  //     data: {
  //       id: '334477',
  //       name: 'McDonals',
  //       cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
  //       cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: '4.2',
  //     },
  //   },
  // ];

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
