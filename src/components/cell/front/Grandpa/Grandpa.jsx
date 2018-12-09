import React from "react";
import "./style.css";

export default class Grandpa extends React.PureComponent {
  renderTemplate = () => {
    const { x, y } = this.props;

    return <div className="grandpa" style={{ gridColumn: x + 1, gridRow: y + 1 }} />;
  }

  render() {
    return this.renderTemplate();
  }
}
