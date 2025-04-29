import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import Spinner from "./Spinner";
const RestaurantMenu = () => {
  
  const {resId} = useParams();

  const resInfo = useRestaurantMenu(resId);
  
  
  if (!resInfo) return <Spinner/>;
  const {
    name,
    areaName,
    cloudinaryImageId,
    costForTwoMessage,
    cuisines,
    totalRatingsString,
  } = resInfo?.cards[2]?.card?.card?.info;
  const{itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card ?.card;
  // console.log(itemCards);
  return (
    <div className="menu">
      <h2>{name}</h2>
      <div className="menu-upper-card">
        <h3>{areaName}</h3>
        <div className="smal-head">
          <h4>({totalRatingsString})</h4>
          <h4>{costForTwoMessage}</h4>
        </div>
        <h3>{cuisines.join(",")}</h3>
      </div>
      <div>
      <h3>Menu Items</h3>
      <ul>
        {itemCards.map((item)=> (
          <li key ={item.card.info.id}>{item.card.info.name} - Rs{item.card.info.price/100}</li>
          ))}
      </ul>
      </div>
      
    </div>
  );
};
export default RestaurantMenu;
