import { useEffect, useState } from "react";
import { RESTAURANTS_CARDS_API_URL } from "../Utilis/constants.js";

const useRestaurants = (id) => {
  const [restValues, setrestValues] = useState(null);
  useEffect(() => {
    getRestrantAPI();
  }, []);

  const getRestrantAPI = async () => {
    const DetailsData = await fetch(RESTAURANTS_CARDS_API_URL + id);
    const json = await DetailsData.json();
    console.log("ResVa", json?.data);
    setrestValues(json?.data?.cards[2]?.card?.card?.info);
  };
  return restValues;
};

export default useRestaurants;
