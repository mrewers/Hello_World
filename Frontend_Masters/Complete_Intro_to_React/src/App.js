import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt Me</h1>
        <Pet name="Fido" animal="dog" breed="bloodhound" />
        <Pet name="Izzard" animal="lizard" breed="iguana" />
        <Pet name="Cluck" animal="bird" breed="chicken" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
