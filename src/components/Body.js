import RestroCards from "./RestroCards";
import resList from "../Utilis/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useIsOnline from "../Utilis/useIsOnline";

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
  const isOnline = useIsOnline();

  if (!isOnline) {
    return <h1> Kindly Check your Internet Connection@!!!🥱</h1>;
  }

  return listOfRestraunts == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="Search-container flex my-[30px] content-center justify-center drop-shadow-xl">
        <div className="Search">
          <input
            type="text"
            className="border-2"
            placeholder="Search by Name"
            value={searchedTxt}
            onChange={(e) => {
              const userSearchedTxt = e.target.value;
              setsearchedTxt(userSearchedTxt);
            }}
          />
          <button
            className="bg-emerald-200 m-1 p-2 text-black drop-shadow-xl cursor-pointer"
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
          className="topRatedRes mx-[10px] rounded-xl bg-amber-100 p-2 m-1 border-amber-700 drop-shadow-xl cursor-pointer"
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

      <div className="restro-container flex flex-wrap mx-[100px] drop-shadow-xl ">
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
