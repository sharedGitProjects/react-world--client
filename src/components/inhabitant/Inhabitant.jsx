import React from "react";
import PropTypes from "prop-types";
import Fox from "./inhabitants/Fox";
import Kolobok from "./inhabitants/Kolobok";
import Raft from "./locations/Raft";
import River from "./locations/River";

export default class Inhabitant extends React.PureComponent {
  renderTemplate = () => {
    const { typeName } = this.props;

    switch (typeName) {
    case "Fox": {
      return <Fox {...this.props} />;
    }
    case "Kolobok": {
      return <Kolobok {...this.props} />;
    }
    case "Raft": {
      return <Raft {...this.props} />;
    }
    case "River": {
      return <River {...this.props} />;
    }
    default: {
      return "";
    }
    }
  }

  render() {
    return this.renderTemplate();
  }
}

Inhabitant.propTypes = {
  typeName: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
};
