import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends Component {
  render() {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {value => (value === "english" ? "Submit" : "Υ  ποβολή")}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
