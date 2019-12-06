import React from "react";
import LanguageContext from "./contexts/LanguageContext";

import "./App.css";

import Form from "./components/Form";
import LanguageSelector from "./components/LanguageSelector";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <LanguageSelector onLanguageChange={this.onLanguageChange} />
        <LanguageContext.Provider value={this.state.language}>
          <Form />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
