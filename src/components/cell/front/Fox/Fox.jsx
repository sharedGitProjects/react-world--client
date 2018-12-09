import React from "react";
import "./style.css";

export default class Fox extends React.PureComponent {
  renderTemplate = () => {
    const { x, y, isDead } = this.props;

    const className = isDead ? "skull" : "fox";
    return <div className={className} style={{ gridColumn: x + 1, gridRow: y + 1 }} />;
  }

  render() {
    return this.renderTemplate();
  }
}
