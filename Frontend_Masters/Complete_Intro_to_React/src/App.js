import React, { StrictMode, useState } from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";

import Pet from "./Pet";
import Details from "./Details";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";

const App = () => {
  const themeHook = useState("darkblue");
  return (
    <StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
