import CLOUD_IMG_URL from "../Utilis/constants";

const RestroCards = (props) => {
  console.log("props", props);
  const { resData } = props;
  console.log("resData", resData);
  const { name, cuisines, avgRating, locality, cloudinaryImageId } = resData;

  return (
    <div className="RestroCards w-53 h-[420px] p-4 m-2 bg-fuchsia-100 rounded-2xl hover:bg-amber-50 cursor-pointer hover:border">
      <div>
        <img
          className="foodLogo rounded-2xl my-1 p-1 h-50 w-53"
          src={CLOUD_IMG_URL + cloudinaryImageId}
          alt="foodimg"
        ></img>
      </div>
      <h3 className="">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h3>{avgRating}</h3>
      <h3>{locality}</h3>
    </div>
  );
};

export default RestroCards;
