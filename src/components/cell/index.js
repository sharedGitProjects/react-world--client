import { connect } from "react-redux";
import Cell from "../Cell";

const mapStateToProps = store => ({
  inhabitant: store.inhabitant,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell);
