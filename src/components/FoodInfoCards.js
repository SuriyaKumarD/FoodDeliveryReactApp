import CLOUD_IMG_URL from "../Utilis/constants";

const FoodInfoCards = (props) => {
  const { data } = props;
  const { name, finalPrice, description, category, imageId, ratings } = data;
  console.log("data", data);
  return (
    <div className="m-2 p-1">
      <div className="flex m-2 p-0.5 justify-between drop-shadow-2xl bg-amber-100 rounded-2xl ">
        <div className="m-2 p-3 col-span-8">
          <label className="block font-bold font-stretch-semi-expanded">
            {name}
          </label>
          <label className="block">{description}</label>
          <label className="block">{category}</label>
          <label className="block">{finalPrice / 100}</label>
          <label className="block">
            {ratings?.aggregatedRating?.rating}-
            {data?.ratings?.aggregatedRating?.ratingCountV2}
          </label>
        </div>
        <div className="float-end col-span-4">
          <img
            src={CLOUD_IMG_URL + imageId}
            className="w-[150px] h-[150px] rounded-2xl drop-shadow-2xl shadow-2xl"
          ></img>
          <button className="bg-white text-center items-center border-emerald-600 text-emerald-500 p-2 font-bold text-xl">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodInfoCards;
