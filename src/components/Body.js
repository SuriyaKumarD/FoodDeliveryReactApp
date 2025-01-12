import RestroCards from "./RestroCards";
import resList from "../Utilis/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestraunts, setlistOfRestraunts] = useState([]);
  const [filterListOfRestraunts, setfilterListOfRestraunts] = useState([]);
  const [searchedTxt, setsearchedTxt] = useState("");
  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    const data = await fetch(
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log("json", json);
    setlistOfRestraunts(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterListOfRestraunts(
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
      <div className="Search-container">
        <div className="Search">
          <input
            type="text"
            placeholder="Search by Name"
            value={searchedTxt}
            onChange={(e) => {
              const userSearchedTxt = e.target.value;
              setsearchedTxt(userSearchedTxt);
            }}
          />
          <button
            onClick={() => {
              //Filter

              const filteredList = listOfRestraunts.filter((x) =>
                x.info.name.toLowerCase().includes(searchedTxt.toLowerCase())
              );
              setfilterListOfRestraunts(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="topRatedRes"
          onClick={() => {
            const filteredList = listOfRestraunts.filter(
              (res) => res.info.avgRating > 4
            );
            setfilterListOfRestraunts(filteredList);
          }}
        >
          Top Rated Restraunts
        </button>
      </div>

      <div className="restro-container">
        {filterListOfRestraunts.map((restaurent) => (
          <Link
            to={"/resDetails/" + restaurent.info.id}
            key={restaurent.info.id}
          >
            <RestroCards resData={restaurent.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
