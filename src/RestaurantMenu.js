import { useParams, useState } from "react-router-dom";
import { restaurantList } from "./constants";

//const [restaurant, setRestaurant] = useState({ restaurantList });
//how to read a dynamic URL
const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  return (
    <div>
      <h1>Restaurant id : {restaurantList[0].data.id}</h1>
      <h2>Namaste</h2>
    </div>
  );
};
export default RestaurantMenu;
