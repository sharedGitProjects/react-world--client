import React from "react";
import PropTypes from "prop-types";
import Fox from "./front/Fox/Fox";
import Kolobok from "./front/Kolobok/Kolobok";
import Raft from "./back/Raft/Raft";
import River from "./back/River/River";

export default class Cell extends React.PureComponent {
  cellTypes = {
    Fox: Fox,
    Kolobok: Kolobok,
    Raft: Raft,
    River: River,
  }

  renderTemplate = () => {
    const { typeName } = this.props;

    if (typeName) {
      const CellType = this.cellTypes[typeName];
      return <CellType {...this.props} />;
    }

    return "";
  }

  render() {
    return this.renderTemplate();
  }
}

Cell.propTypes = {
  typeName: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
};
