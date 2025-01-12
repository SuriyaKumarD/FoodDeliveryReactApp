import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();

  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>Something Went Wrong!!😿</h2>
      <h3>{err.data}</h3>
    </div>
  );
}

export default Error;
