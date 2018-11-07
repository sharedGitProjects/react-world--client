import React from "react";

export default class Inhabitant2 extends React.PureComponent {
  renderTemplate = () => {
    const { cell } = this.props;

    return <div className="inhabitant2" style={{ gridColumn: cell.x, gridRow: cell.y }} />;
  }

  render() {
    return this.renderTemplate();
  }
}
