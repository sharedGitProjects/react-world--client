import React from "react";
import { connect } from "react-redux";
import Inhabitant from "./Inhabitant";

class InhabitantContainer extends React.PureComponent {
  render() {
    return <Inhabitant {...this.props} />;
  }
}

const mapStateToProps = store => ({
  inhabitant: store.inhabitant,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InhabitantContainer);
