import React from "react";

export default class Raft extends React.PureComponent {
  renderTemplate = () => {
    const { x, y } = this.props;

    return <div className="raft" style={{ gridColumn: x, gridRow: y }} />;
  }

  render() {
    return this.renderTemplate();
  }
}
