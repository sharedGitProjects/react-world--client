import React, { PureComponent } from "react";

import Toolbar from "./toolbar";
import WorldEvent from "./worldEvent";
import World from "./world";

export default class App extends PureComponent {
  render() {
    return (
      <div className="world">
        <Toolbar />
        <WorldEvent />
        <World />
      </div>
    );
  }
}
