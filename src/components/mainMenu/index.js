import { connect } from "react-redux";
import MainMenu from "./MainMenu";

const mapStateToProps = store => ({
  world: store.world,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenu);
