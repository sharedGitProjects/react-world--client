import React from "react";

export default class River extends React.PureComponent {
  renderTemplate = () => {
    const { x, y } = this.props;

    return <div className="river" style={{ gridColumn: x + 1, gridRow: y + 1 }} />;
  }

  render() {
    return this.renderTemplate();
  }
}
