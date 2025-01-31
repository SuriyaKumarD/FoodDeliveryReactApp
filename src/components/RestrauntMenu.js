import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CLOUD_IMG_URL from "../Utilis/constants";
import Shimmer from "./Shimmer";
import useRestaurants from "../Utilis/useRestaurants";

const RestrauntMenu = () => {
  const { id } = useParams();

  const restValues = useRestaurants(id);

  return !restValues ? (
    <Shimmer />
  ) : (
    <div>
      <h1 className="text-2xl">RestrauntMenu in ID: {id}!!!</h1>
      <img
        className="resValueImg size-80 border-2 drop-shadow-lg caret-indigo-300 justify-center items-center align self-center"
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
