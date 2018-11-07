import React from "react";
import PropTypes from "prop-types";
import Inhabitant1 from "./inhabitants/Inhabitant1";
import Inhabitant2 from "./inhabitants/Inhabitant2";

export default class Inhabitant extends React.PureComponent {
  renderTemplate = () => {
    const { typeName } = this.props;

    switch (typeName) {
    case "Inhabitant1": {
      return <Inhabitant1 {...this.props} />;
    }
    case "Inhabitant2": {
      return <Inhabitant2 {...this.props} />;
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
  cell: PropTypes.object,
};
