import RestroCards from "./RestroCards";
import resList from "../Utilis/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="Search">
        <h2>Search</h2>
      </div>
      <div className="restro-container">
        {resList.map((restaurent) => (
          <RestroCards key={restaurent.info.id} resData={restaurent.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
