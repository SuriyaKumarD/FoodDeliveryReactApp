import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CLOUD_IMG_URL from "../Utilis/constants";
import Shimmer from "./Shimmer";
import useRestaurants from "../Utilis/useRestaurants";
import useRestaurantsContents from "../Utilis/useRestaurantsContents";
import FoodInfoCards from "./FoodInfoCards";

const RestrauntMenu = () => {
  const { id } = useParams();

  const restValues = useRestaurants(id);
  const resMenuContent = useRestaurantsContents(id);
  console.log("FoodInfo", resMenuContent);
  console.log("restValues", restValues);
  return !restValues ? (
    <Shimmer />
  ) : (
    <div className="justify-center items-center w-[70%] ml-auto mr-auto">
      <div className="container justify-center items-center  m-1">
        <div className="flex justify-around items-center rounded-2xl p-1.5 m-1.5 bg-amber-100 drop-shadow-2xl shadow-2xl text-1xl">
          <img
            className="resValueImg m-2 p-1.5 float-left text-center size-80 border-2 drop-shadow-lg caret-indigo-300 justify-center items-center align self-center rounded-2xl"
            src={CLOUD_IMG_URL + restValues?.cloudinaryImageId}
          ></img>
          <div className="block m-5 p-1.5">
            <h1 className="text-black text-2xl font-bold">
              {" "}
              {restValues?.name}!!!
            </h1>
            <h3>Cost: {restValues?.costForTwoMessage}</h3>
            <h3>Avg Ratings: {restValues?.avgRating} Stars</h3>
            <h3>Cuisines: {restValues?.cuisines?.join(",")}</h3>
            <h3>Avg city: {restValues?.city}</h3>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="container justify-center items-center  ">
          <label className="flex text-center justify-center items-center font-bold m-2 p-2 bg-amber-300 drop-shadow-2xl shadow-2xl">
            Recommendations {resMenuContent?.length}
          </label>
          {resMenuContent?.map((opt) => (
            // <p>{opt?.card?.info?.id}</p>
            <FoodInfoCards
              data={opt?.card?.info}
              key={opt?.card?.info?.id}
            ></FoodInfoCards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestrauntMenu;
