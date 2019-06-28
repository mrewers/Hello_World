import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

const PageOne = () => (
  <div>
    Page One
    <br />
    <Link to="/2">Navigate to Page 2</Link>
  </div>
);

const PageTwo = () => (
  <div>
    Page Two
    <br />
    <Link to="/">Navigate Home</Link>
  </div>
);

const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <Route path="/" exact component={PageOne} />
        <Route path="/2" component={PageTwo} />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
