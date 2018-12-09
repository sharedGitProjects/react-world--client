import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

export default class MainMenu extends React.PureComponent {
  render() {
    return (
      <div className="mainMenu">
        <ul>
          <li>
            <Link to="/world/">Мир</Link>
          </li>
          <li>
            <Link to="/profile/">Управление</Link>
          </li>
        </ul>
      </div>
    );
  }
}
