import React from "react";
import PropTypes from "prop-types";
import Fox from "./front/Fox/Fox";
import Kolobok from "./front/Kolobok/Kolobok";
import Raft from "./back/Raft/Raft";
import River from "./back/River/River";

export default class Cell extends React.Component {
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

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.x !== this.props.x || nextProps.y !== this.props.y || nextProps.isDead !== this.props.isDead) {
      return true;
    }

    return false;
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
