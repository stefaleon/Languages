import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    console.log("from LanguageSelector, this.context: ", this.context);

    return (
      <div>
        Select language{" "}
        <i
          className="flag uk"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="flag gr"
          onClick={() => this.context.onLanguageChange("greek")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
