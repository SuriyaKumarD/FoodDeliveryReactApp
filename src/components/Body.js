import RestroCards from "./RestroCards";
import resList from "../Utilis/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestraunts, setlistOfRestraunts] = useState(resList);

  return (
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
