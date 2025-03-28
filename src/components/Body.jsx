import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState, useEffect } from "react";
import { resList } from "../utils/mockData";
import Spinner from "./Spinner";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [searchText , SetSearchText] = useState('');
  const [filteredRestaurant , setFilteredRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9970957&lng=77.53363790000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    //Optional chaining
    setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  // if(listOfRestaurants.length === 0){
  //   return <Shimmer/>
  // }
  return listOfRestaurants.length === 0 ?(<Shimmer/>) : (
    <div className="body">
      
      <div className="filter">
        <div className="search">
            <input type="text" className="search-box" value={searchText}  onChange={(e)=>{
              SetSearchText(e.target.value);
              }} />
            <button onClick={()=>{
              const filteredRes = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRestaurant(filteredRes);
            }}
            >Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating < 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
