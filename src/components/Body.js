import { restaurantList } from "../constants";
import { RestaurantCard } from "./RestrauntCard";
const Body = () => {
  return (
    <div className="restaurant-list">
      {/* {RestrauntCard()} */}
      {/* <RestrauntCard restaurant={restaurantList[0]} />
        <RestrauntCard restaurant={restaurantList[1]} />
        <RestrauntCard restaurant={restaurantList[2]} />
        <RestrauntCard restaurant={restaurantList[3]} />
        <RestrauntCard restaurant={restaurantList[4]} />
        <RestrauntCard restaurant={restaurantList[5]} /> */}

      {restaurantList.map((restaurant) => {
        return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
      })}
    </div>
  );
};

export default Body;
