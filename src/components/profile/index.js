import { connect } from "react-redux";
import Profile from "./Profile";
import getWorld from "../../actions/getWorld";
import createWorld from "../../actions/createWorld";

const mapStateToProps = store => ({
  world: store.world,
});

const mapDispatchToProps = dispatch => ({
  getWorld: worldName => dispatch(getWorld(worldName)),
  createWorld: (worldName, map, events) => dispatch(createWorld(worldName, map, events)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
