import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === "english" ? "Submit" : "Υποβολή";
    return <button className="ui button primary">{text}</button>;
  }
}

export default Button;
