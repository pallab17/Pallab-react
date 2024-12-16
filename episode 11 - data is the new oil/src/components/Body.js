import { useState, useEffect } from "react";
import RestaurantCard ,{RestaurantcardwithLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../common/useOnlineStatus";
//import resList from "../common/mockdata";

const Body = () => {
  //const[listOfRestaurants,setListOfRestaurants] = useState(resList); we are not using the mock data here as swiggy nijeder api data format change koreche so logic break hocche
  const [listOfRestaurants, setListOfRestaurants] = useState([]); // prothome our app doesnt have any restaurant list

  // making a copy of the original list of restuarants
  const [filteredlistOfRestaurants, setfilteredlistOfRestaurants] = useState(
    []
  );
console.log(listOfRestaurants);
  const [searchText, setsearchText] = useState("");

  // creating a hoc 
  //  HigherOrderRestaurantComponentWithLabel is the hoc which has the restaurant component plus the label
  const HigherOrderRestaurantComponentWithLabel = RestaurantcardwithLabel(RestaurantCard);

  /* useEffect sikhchi 
  useeffecr hook - useeffect();
  import from react as a named import
  useEffect(argument1 ,argument2);
  argument 1 - callback fn jeita execute hoye after the component renders 
  here body component render howar por ei callback fn ta render hobe
  argument 2- dependency array


  */
  useEffect(() => {
    fetchData(); // ekta fn banachi jeitar modhe logic likhbo to fetch live data from swiggy
  }, []);

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

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
      // https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9715987&lng=77.5945627&carousel=true&third_party_vendor=1
      //https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#
    );
    // converting this data to json
    const json = await data.json();

    console.log(json);
    // eibar ami chaichi ei json r modhe new restuarant r data r list ke take updated data of listofrestaurants baniye di
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // amra copy/duplicate list ta toiri korlam
    setfilteredlistOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //  if(listOfRestaurants.length === 0){
  //   return <h1>loading...</h1>;

  //  }

  // conditional rendering - rendering on the basis of a condition -- interview qs
  // if(listOfRestaurants.length===0){
  //   return <Shimmer/> ;
  // }

const onlineStatus = useOnlineStatus();

if(onlineStatus===false) return <h1>oops internei nei toh ema</h1>

  // using ternary operator
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        {/* <div className="search">search</div> */}
        <div className="filter flex">
          <div className="search p-4 m-4">
            <input
              type="text"
              className=" border border-solid border-black  "
              value={searchText}
              onChange={(e) => {
                setsearchText(e.target.value); // onchange fn take use kore user je text ta likhche seitake ami state variable (e update kore) e store kore rakhchi
              }}
            />
            <button className=" m-4 py-1 px-4 bg-green-100 rounded-lg "
              onClick={() => {
                // ei search btn ta click hole i want to show the user what the user want to see according to their searched text
                // search  text unujai filter marbo
                // so i need to track the searched text to do this we need
                // input r modhe value function ta use korbo
                // aar oi value fn r bhetore amra ekta state variable debo
                // such that oi state variable ta track rakhte parbe what value is provided and what change is required according to the written text
                console.log(searchText);

                const filteredList = listOfRestaurants.filter(
                  (res) =>
                    res.info.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  // .toLowercase() fn ta use korchi to make the search text insensitive mane je bhabei capital ba small letter e likhi na keno(it will convert the text in small letters both restaurant r naaam aar searched text duto kei lower case e convert kore debe) tarpor it will fetch me results
                  // includes fn ta use korchi jate restaurant r naam r sathe mil pelei sei bujhe listof restaurant show korte pari
                  // whole restaurant name unujai search korte chaile
                  //  res.info.name === searchedtext condition ta use korlei hobe
                  // user je text ta search korche seita jodi kono restaurant r naam r sathe mil paye tahole list of restuarant take update kore screen e render korbo using setlistofrestaurants fn
                );
                setfilteredlistOfRestaurants(filteredList);
              }}
            >
              Search
            </button>
          
          <button className=" m-4 py-1 px-4 bg-green-100 "
            
            onClick={() => {
              // ekhane logic ta amake bhabte + likhte hobe
              // logic will contain--> je bhai button ta click korle only top rated restaurant screen e dekhabe
              //console.log("button clicked");
              // listOfRestaurants = listOfRestaurants.filter(
              //   (r)=>r.data.avgRating>4
              // );
              // console.log(listOfRestaurants);
              const filteredList = listOfRestaurants.filter(
                (r) => r.info.avgRating > 4.2
                // filteredlist bole ekta var banachi jeitar modhe ami listofRestaurants take update korchi according to their avg rating
              );
              setfilteredlistOfRestaurants(filteredList); // tarpor ei filteredlist takei pass kore dicchi setlistofrestaurants r modhe such that original list of restuarants ta update hoye jaye when the top rated restaurant button is clicked
            }}
          >
            Top Rated Restaurants
          </button>
          <button
            className=" m-4 py-1 px-4 bg-green-100 "
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (r) => r.info.sla.deliveryTime < 20
              );
              setfilteredlistOfRestaurants(filteredList);
            }}
          >
            Fast deliveryTime
          </button>
        </div>
        </div>
        <div className=" flex flex-wrap">
          {filteredlistOfRestaurants.map((element) => (
           <Link key={element.info.id}
           to={"/restaurants/" + element.info.id}
           >
            <RestaurantCard  resData={element} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;

/* there is a problem that is jokhun user ekta search korche 
seitar basis e amra original list of restaurant r list take update korchi
tai jonno we are filtering the original list and we are losing the original restaurant r list 

to fix this amader ekta copy of original list banate hobe 
tarpor basically amra originallistof restaurants e search korbo filter o korbo
kintu duplicate/copy list tate update kore oi duplicate/copy wala updated list of restaurants ke screen e render/show korbo




the most important concept in this lecture 6 is 
whenever a state variable is fucking getting updated react re renders the component

jokhun amra just ekta character/input text likhchi that is c for example tokhun ei react is re-rendering the componenet
that is cafe word ta search korchi jokhun total 4 bar react re-render korche component take

*/
