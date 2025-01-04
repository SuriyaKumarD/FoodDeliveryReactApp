import RestroCards from "./RestroCards";
import resList from "../Utilis/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestraunts, setlistOfRestraunts] = useState([]);

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log("json", json);
    setlistOfRestraunts(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //conditional Rendering
  //   if (listOfRestraunts == 0) {
  //     return <Shimmer />;
  //   }

  return listOfRestraunts == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="Search">
      <h2>Search</h2>
      </div> */}
      <button
        className="topRatedRes"
        onClick={() => {
          const filteredList = listOfRestraunts.filter(
            (res) => res.info.avgRating > 4
          );
          setlistOfRestraunts(filteredList);
        }}
      >
        Top Rated Restraunts
      </button>
      <div className="restro-container">
        {listOfRestraunts.map((restaurent) => (
          <RestroCards key={restaurent.info.id} resData={restaurent.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
