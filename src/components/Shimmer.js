const Shimmer = () => {
  return (
    <div className="shimmer-container flex">
      {Array(10)
        .fill("")
        .map((e) => (
          <div
            className="shimmerCards w-53 h-[420px] p-4 m-2 bg-gray-100 rounded-2xl hover:bg-amber-50 cursor-pointer hover:border"
            key={indexedDB}
          >
            <div className="shimmerImg"></div>
          </div>
        ))} 
    </div>
  );
};

export default Shimmer;
