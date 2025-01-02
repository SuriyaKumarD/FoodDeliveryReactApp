import CLOUD_IMG_URL from "../Utilis/constants";

const RestroCards = (props) => {
  console.log("props", props);
  const { resData } = props;
  console.log("resData", resData);
  const { name, cuisines, avgRating, locality, cloudinaryImageId } = resData;

  return (
    <div className="RestroCards">
      <div>
        <img
          className="foodLogo"
          src={CLOUD_IMG_URL + cloudinaryImageId}
          alt="foodimg"
        ></img>
      </div>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h3>{avgRating}</h3>
      <h3>{locality}</h3>
    </div>
  );
};

export default RestroCards;
