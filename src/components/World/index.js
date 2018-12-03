import { connect } from "react-redux";
import World from "./World";
import getTemperature from "../../actions/getTemperature";
import getTimeOfday from "../../actions/getTimeOfday";

const mapStateToProps = store => ({
  world: store.world,
});

const mapDispatchToProps = dispatch => ({
  getTemperature: () => dispatch(getTemperature()),
  getTimeOfday: () => dispatch(getTimeOfday()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(World);
