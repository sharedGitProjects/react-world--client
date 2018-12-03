import React, { PureComponent } from "react";

import WorldProfile from "./worldProfile";
import WorldEvent from "./worldEvent";
import World from "./world";
import "./App.css";

export default class App extends PureComponent {
  render() {
    return (
      <div className="world">
        <WorldProfile />
        <WorldEvent />
        <World />
      </div>
    );
  }
}
