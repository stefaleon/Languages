import React from "react";
import { LanguageStore } from "./contexts/LanguageContext";

import "./App.css";

import Form from "./components/Form";
import LanguageSelector from "./components/LanguageSelector";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <Form />
        </LanguageStore>
      </div>
    );
  }
}

export default App;
