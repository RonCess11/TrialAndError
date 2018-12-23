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
      </div>
    );
  }
}

export default App;
