// const Footer = () => {
//   return <h5>Footer</h5>;
// };

// export default Footer;

import { restaurantList } from "../constants";
import { RestaurantCard } from "./RestrauntCard";
import { useEffect, useState } from "react";
import { swiggy_api_URL } from "../constants";

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

  //searchVar is used to update the search bar
  const serachVar = useState();
  [searchText, setSearchText] = serachVar;

  //searchClick is just used to check if the button has been clicked
  const [searchClicked, setSearchClicked] = useState("false");

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
