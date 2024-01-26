import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
      <>
        <div className="body">
          <div className="search">search</div>
          <div className="restaurant-container">
            {/* <RestaurantCard 
            // but data erom bhabe ashe toh na 
            // tai amra actual swiggy theke data tule anbo
              resName = "PB7 foods"   // prop eita 
              cuisine = "Indian,Pizza"  // react ei sobkota props ke ek jayega te joro kore i.e. wrap up kore object r rup e send korbe RestaurantCard component r modhe
            />
            <RestaurantCard 
              resName = "PB117 foods"   
              cuisine = "hui hui"
            /> */}
            {/* <RestaurantCard resData={resObj} /> */}
           
            {/* <RestaurantCard resData={resList[0]} />
            <RestaurantCard resData={resList[1]} />
            <RestaurantCard resData={resList[2]} />
            <RestaurantCard resData={resList[3]} />
            <RestaurantCard resData={resList[4]} />
            <RestaurantCard resData={resList[5]} />
            <RestaurantCard resData={resList[6]} />
            <RestaurantCard resData={resList[7]} />
            <RestaurantCard resData={resList[8]} />
            <RestaurantCard resData={resList[9]} />
            <RestaurantCard resData={resList[10]} /> */}
  
  {/* map = loop korche sob kota element ke in the array and print korche oitake screen e
   (element == array r element gulo) jeita amra for loop e use kori
   Warning: Each child in a list should have a unique "key" prop. -- > ei error ta sorate hole we always have to 
   give individual key to every element while looping
  
  
   react doesnt recommend us to use index as key in map method while looping
  
   */}
            {resList.map((element) => (
              <RestaurantCard  key={element.data.id} resData={element} />
            ))
            }
          </div>
        </div>
      </>
    );
  };

  export default Body;