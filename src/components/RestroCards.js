import CLOUD_IMG_URL from "../Utilis/constants";

const RestroCards = (props) => {
  console.log("props", props);
  const { resData } = props;
  const { name, cuisines, avgRating, locality, cloudinaryImageId } = resData;

  return (
    <div className="container">
      <div className="RestroCards w-53 h-[420px] p-4 m-2 bg-fuchsia-100 rounded-2xl hover:bg-amber-50 cursor-pointer hover:border drop-shadow-2xl shadow-2xl">
        <div>
          <img
            className="foodLogo rounded-2xl my-1 p-1 h-50 w-53 drop-shadow-2xl "
            src={CLOUD_IMG_URL + cloudinaryImageId}
            alt="foodimg"
          ></img>
        </div>
        <h3 className="font-mono">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h3>{avgRating}</h3>
        <h3>{locality}</h3>
      </div>
    </div>
  );
};

export default RestroCards;
