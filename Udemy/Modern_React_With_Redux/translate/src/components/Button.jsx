import React, { Component } from "react";

import ColorContext from "../contexts/ColorContext";
import LanguageContext from "../contexts/LanguageContext";

class Button extends Component {
  render() {
    return (
      <ColorContext.Consumer>
        {value => {
          const color = value === "red" ? "red" : "primary";
          return (
            <button className={`ui button ${color}`}>
              <LanguageContext.Consumer>
                {({ language }) =>
                  language === "english" ? "Submit" : "Voorleggen"
                }
              </LanguageContext.Consumer>
            </button>
          );
        }}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
