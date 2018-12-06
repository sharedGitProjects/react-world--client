import React from "react";

export default class Fox extends React.PureComponent {
  renderTemplate = () => {
    const { x, y } = this.props;

    return <div className="fox" style={{ gridColumn: x + 1, gridRow: y + 1 }} />;
  }

  render() {
    return this.renderTemplate();
  }
}
