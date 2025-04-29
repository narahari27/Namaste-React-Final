import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,cuisines,avgRating,costForTwo,areaName,cloudinaryImageId,sla} = resData?.info;
    return(
        <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-50 hover:bg-gray-200 h-[470px]">
            <img className="rounded-sm" src={CDN_URL + cloudinaryImageId}/>
            <h3 className="font-bold py-2 text-lg" >{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{areaName}</h4>
            <h4>{sla?.deliveryTime} Mins</h4>
        </div>
    )
};
export default RestaurantCard;