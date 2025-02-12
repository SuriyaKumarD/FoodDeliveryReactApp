import { useEffect, useState } from "react";
import { RESTAURANTS_CARDS_API_URL } from "../Utilis/constants.js";

const useRestaurantsContents = (id) => {
  const [foodInfo, setFoodInfo] = useState(null);
  useEffect(() => {
    getFoodInfoCards();
  });

  const getFoodInfoCards = async () => {
    const obtainedData = await fetch(RESTAURANTS_CARDS_API_URL + id);
    const json = await obtainedData.json();
    setFoodInfo(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  };
  return foodInfo;
};

export default useRestaurantsContents;
