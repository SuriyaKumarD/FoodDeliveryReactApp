const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(10)
        .fill("")
        .map((e) => (
          <div className="shimmerCards">
            <div className="shimmerImg"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
