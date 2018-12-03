import { connect } from "react-redux";
import WorldProfile from "./WorldProfile";
import getWorld from "../../actions/getWorld";
import createWorld from "../../actions/createWorld";
import updateWorld from "../../actions/updateWorld";

const mapStateToProps = store => ({
  world: store.world,
});

const mapDispatchToProps = dispatch => ({
  getWorld: worldName => dispatch(getWorld(worldName)),
  createWorld: (worldName, map, events) => dispatch(createWorld(worldName, map, events)),
  updateWorld: props => dispatch(updateWorld(props)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorldProfile);
