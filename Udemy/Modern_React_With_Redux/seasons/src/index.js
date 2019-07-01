import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import Loader from "./Components/Loader";
import SeasonDisplay from "./Components/SeasonDisplay/SeasonDisplay";
import useLocation from "./utils/useLocation";

const App = () => {
  const [lat, errorMessage] = useLocation();

  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if (lat) {
    content = <SeasonDisplay latitude={lat} />;
  } else {
    content = <Loader message="Please accept location request" />;
  }

  return <div className="border red">{content}</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
