import { connect } from "react-redux";
import Inhabitant from "../Inhabitant";

const mapStateToProps = store => ({
  inhabitant: store.inhabitant,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inhabitant);
