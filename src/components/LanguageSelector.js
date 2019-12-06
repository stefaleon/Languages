import React, { Component } from "react";

class LanguageSelector extends Component {
  render() {
    return (
      <div>
        Select language{" "}
        <i
          className="flag uk"
          onClick={() => this.props.onLanguageChange("english")}
        />
        <i
          className="flag gr"
          onClick={() => this.props.onLanguageChange("greek")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
