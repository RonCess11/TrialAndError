import React, { Component } from "react";
import "./App.css";
import menuDrawer from "./containers/MenuDrawer/menuDrawer";
import NavBar from "./containers/NavigationBar/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">

        <NavBar /> {/* this is the navigation */}
        <menuDrawer /> {/* this is the drawer */}
        {/* */}
        {/* develop a main Form */}
        {/* develop footer */}
        {/* develop a delivery Form */}
        {/* develop a information Form */}
        {/* develop a login Form */}
        {/* develop a AccountPage*/}
        {/* develop a Send Email form */}
        {/*  */}

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

      </div>
    );
  }
}

export default App;
