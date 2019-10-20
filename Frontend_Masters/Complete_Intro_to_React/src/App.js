import React, { StrictMode } from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";

import Pet from "./Pet";
import Details from "./Details";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <StrictMode>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
