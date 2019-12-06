import React from "react";
import "./App.css";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select language{" "}
          <i
            className="flag uk"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag gr"
            onClick={() => this.onLanguageChange("greek")}
          />
        </div>
        {this.state.language}
      </div>
    );
  }
}

export default App;
