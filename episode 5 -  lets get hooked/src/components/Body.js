import RestaurantCard from "./RestaurantCard";
import resList from "../common/mockdata";

const Body = () => {
  return (
    <>
      <div className="body">
        {/* <div className="search">search</div> */}
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              console.log("button clicked");
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="restaurant-container">
          {resList.map((element) => (
            <RestaurantCard key={element.data.id} resData={element} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
