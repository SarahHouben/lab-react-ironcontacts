import React, { Component } from "react";
import "./App.css";
import ContactTable from "./ContactTable";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <ContactTable />
      </div>
    );
  }
}

export default App;
