import { restaurantList } from "../constants";
import { RestaurantCard } from "./RestrauntCard";
import { useState } from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );

  return filterData;
}

const Body = () => {
  //use state hook is used to create state variables
  //This is know as two way binding

  //in order to filter the restaurants, we use a local state variable to filter the data
  const [restaurants, setRestaurants] = useState(restaurantList);

  //searchVar is used to update the search bar
  const serachVar = useState();
  [searchText, setSearchText] = serachVar;

  //searchClick is just used to check if the button has been clicked
  const [searchClicked, setSearchClicked] = useState("false");
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </div>
      <button
        className="search-btn"
        onClick={() => {
          setSearchClicked("true");

          //data is used to filter the restaurants
          const data = filterData(searchText, restaurants);
          setRestaurants(data);
        }}
      >
        Search
      </button>
      <h1>{searchClicked}</h1>
      <div className="restaurant-list">
        {/* {RestrauntCard()} */}
        {/* <RestrauntCard restaurant={restaurantList[0]} />
        <RestrauntCard restaurant={restaurantList[1]} />
        <RestrauntCard restaurant={restaurantList[2]} />
        <RestrauntCard restaurant={restaurantList[3]} />
        <RestrauntCard restaurant={restaurantList[4]} />
        <RestrauntCard restaurant={restaurantList[5]} /> */}

        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
