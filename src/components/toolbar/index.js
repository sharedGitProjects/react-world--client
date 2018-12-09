import { connect } from "react-redux";
import Toolbar from "./Toolbar";
import updateWorld from "../../actions/updateWorld";
import createWorld from "../../actions/createWorld";

const mapStateToProps = store => ({
  world: store.world,
});

const mapDispatchToProps = dispatch => ({
  updateWorld: props => dispatch(updateWorld(props)),
  createWorld: (worldName, map, events) => dispatch(createWorld(worldName, map, events)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar);
