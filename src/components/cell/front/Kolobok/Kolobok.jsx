import React from "react";

export default class Kolobok extends React.PureComponent {
  renderTemplate = () => {
    const { x, y, isDead } = this.props;

    const className = isDead ? "skull" : "kolobok";
    return <div className={className} style={{ gridColumn: x + 1, gridRow: y + 1 }} />;
  }

  render() {
    return this.renderTemplate();
  }
}
