import {useState} from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../common/mockdata";


const Body = () => {

  const[listOfRestaurants,setListOfRestaurants] = useState([{
    type: 'restaurant',
    data: {
      id: '334475',
      name: 'KFC',
      cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
      cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
      costForTwo: 40000,
      deliveryTime: 36,
      avgRating: '3.8',
    },
  },
  {
    type: 'restaurant',
    data: {
      id: '334476',
      name: 'Dominos',
      cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
      cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
      costForTwo: 40000,
      deliveryTime: 36,
      avgRating: '4.8',
    },
  },
  {
    type: 'restaurant',
    data: {
      id: '334477',
      name: 'McDonals',
      cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
      cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
      costForTwo: 40000,
      deliveryTime: 36,
      avgRating: '4.2',
    },
  }
]);

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
              
            }}
          >
            Top Rated Restaurants
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
