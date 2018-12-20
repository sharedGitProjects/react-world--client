import { connect } from "react-redux";
import WorldEvent from "./WorldEvent";
import getTemperature from "../../actions/getTemperature";
import getTimeOfday from "../../actions/getTimeOfday";

export const mapStateToProps = store => ({
  event: store.event,
});

const mapDispatchToProps = dispatch => ({
  getTemperature: () => dispatch(getTemperature()),
  getTimeOfday: () => dispatch(getTimeOfday()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorldEvent);
