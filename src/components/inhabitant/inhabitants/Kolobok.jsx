import React from "react";

export default class Kolobok extends React.PureComponent {
  renderTemplate = () => {
    const { x, y } = this.props;

    return <div className="kolobok" style={{ gridColumn: x, gridRow: y }} />;
  }

  render() {
    return this.renderTemplate();
  }
}
