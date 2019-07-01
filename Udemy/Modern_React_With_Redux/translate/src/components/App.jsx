import React, { Component } from "react";

import LanguageSelector from "./LanguageSelector";
import UserCreate from "./UserCreate";
import ColorContext from "../contexts/ColorContext";
import { LanguageStore } from "../contexts/LanguageContext";

class App extends Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
