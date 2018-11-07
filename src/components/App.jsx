import React, { PureComponent } from "react";

import WorldProfileContainer from "./WorldProfileContainer";
import WorldEventContainer from "./WorldEventContainer";
import WorldContainer from "./WorldContainer";
import "./App.css";

export default class App extends PureComponent {
  render() {
    return (
      <div className="world">
        <WorldProfileContainer />
        <WorldEventContainer />
        <WorldContainer />
      </div>
    );
  }
}
