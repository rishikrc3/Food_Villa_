import { restaurantList } from "../constants";
import { RestaurantCard } from "./RestrauntCard";
import { useEffect, useState } from "react";
import { swiggy_api_URL } from "../constants";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );

  return filterData;
}

const Body = () => {
  //use state hook is used to create state variables
  //This is known as two way binding

  //in order to filter the restaurants, we use a local state variable to filter the data
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //useEffect is being used, if the useEffect is called with an empty depandancy array, the useEffect will be called just once and that too after the intial render

  // useEffect(() => {
  //   getRestaurants();
  // }, []);

  async function getRestaurants() {
    const data = await fetch(swiggy_api_URL);
    const json = await data.json;
    //Optional Chaining is a better way
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const data = filterData(searchText, restaurants);
      setRestaurants(data);
      setErrorMessage("");
      if (data.length === 0) {
        setErrorMessage("No matches restaurant found");
      }
    } else {
      setErrorMessage("");
      setRestaurants(restaurants);
    }
  };

  // if allRestaurants is empty don't render restaurants cards
  if (!restaurants) return null;
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          // update the state variable searchText when we typing in input box
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // user click on button searchData function is called
            searchData(searchText, restaurants);
          }}
        >
          Search
        </button>
      </div>
      {restaurants.length === 0 ? (
        <Shimmer></Shimmer>
      ) : (
        <div className="restaurant-list">
          {restaurants.map((restaurant) => {
            return (
              <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
