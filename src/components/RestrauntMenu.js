import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CLOUD_IMG_URL from "../Utilis/constants";
import Shimmer from "./Shimmer";

const RestrauntMenu = () => {
  const { id } = useParams();
  useEffect(() => {
    getRestaurantsDetails();
  }, []);
  const [restValues, setrestValues] = useState(null);

  const getRestaurantsDetails = async () => {
    const DetailsData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" +
        id
    );
    const json = await DetailsData.json();
    console.log("ResVa", json?.data);
    setrestValues(json?.data?.cards[2]?.card?.card?.info);
  };

  return !restValues ? (
    <Shimmer />
  ) : (
    <div>
      <h1>RestrauntMenu in ID: {id}!!!</h1>
      <img
        className="resValueImg"
        src={CLOUD_IMG_URL + restValues?.cloudinaryImageId}
      ></img>
      <h1>Name: {restValues?.name}!!!</h1>
      <h3>Cost: {restValues?.costForTwoMessage}</h3>
      <h3>Avg Ratings: {restValues?.avgRating} Stars</h3>
      <h3>Cuisines: {restValues?.cuisines?.join(",")}</h3>
      <h3>Avg city: {restValues?.city}</h3>
    </div>
  );
};

export default RestrauntMenu;
