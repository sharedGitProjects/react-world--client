import React from "react";
import "./style.css";

export default class Raft extends React.PureComponent {
  render() {
    const { operation, title } = this.props;

    return (
      <div className="command" onClick={operation}>
        {title}
      </div>
    );
  }
}
