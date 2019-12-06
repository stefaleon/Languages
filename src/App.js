import React from "react";

import "./App.css";

import Form from "./components/Form";

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

        <Form />
      </div>
    );
  }
}

export default App;
