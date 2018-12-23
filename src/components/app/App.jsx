import React, { PureComponent } from "react";

import Toolbar from "../toolbar";
import WorldEvent from "../worldEvent";
import World from "../world";
import "./style.css";

export default class App extends PureComponent {
  render() {
    return (
      <div className="world">
        <div className="worldPanel">
          <Toolbar />
          <WorldEvent />
        </div>
        <div className="worldPanel">
          <World />
        </div>
      </div>
    );
  }
}
