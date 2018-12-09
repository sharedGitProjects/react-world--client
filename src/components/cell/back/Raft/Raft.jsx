import React from "react";
import "./style.css";

export default class Raft extends React.PureComponent {
  renderTemplate = () => {
    const { x, y } = this.props;

    return <div className="raft" style={{ gridColumn: x + 1, gridRow: y + 1 }} />;
  }

  render() {
    return this.renderTemplate();
  }
}
