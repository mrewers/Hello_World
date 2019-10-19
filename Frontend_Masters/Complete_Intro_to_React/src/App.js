import React from "react";
import { render } from "react-dom";

import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return <SearchParams />;
};

render(<App />, document.getElementById("root"));
