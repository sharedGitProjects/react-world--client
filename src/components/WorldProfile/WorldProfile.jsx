import React from "react";
import PropTypes from "prop-types";
import buildWorldData from "../../utils/buildWorldData";

export default class WorldProfile extends React.PureComponent {
  state = {
    worldNameid: "",
  }

  onGetWorldClick = () => {
    const worldNameInput = document.getElementById("worldNameid");
    this.props.getWorld(worldNameInput.value);
  }

  onCreateWorldClick = () => {
    const worldNameInput = document.getElementById("worldNameid");
    const map = buildWorldData();
    const events = [];
    this.props.createWorld(worldNameInput.value, map, events, true);
  }

  onSaveWorldClick = () => {
    const { map, name } = this.props.world;

    if (map && name) {
      const events = [];
      this.props.createWorld(name, map, events);
    }
  }

  onUpdateWorldClick = () => {
    const { map, name } = this.props.world;

    if (map && name) {
      const events = [];
      this.props.updateWorld({ ...this.props, map, events });
    }
  }

  onStopUpdateClick = () => {
    if (this.worldTick) {
      clearInterval(this.worldTick);
      this.worldTick = null;
    }
  }

  handleChange = e => {
    const { id } = e.currentTarget;
    this.setState({ [id]: e.currentTarget.value });
  }

  componentDidMount() {
    this.worldTick = setInterval(() => {
      this.onUpdateWorldClick();
    }, 1000);
  }

  componentWillUnmount() {
    if (this.worldTick) {
      clearInterval(this.worldTick);
      this.worldTick = null;
    }
  }

  renderTemplate = () => {
    const { error, isFetching } = this.props.world;

    if (error) {
      return <p>Ошибка выполнения запроса</p>;
    }

    if (isFetching) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div className="command" onClick={this.onCreateWorldClick}>
          createWorld
        </div>
      </div>
    );
  }

  render() {
    const { worldNameid } = this.state;

    return (
      <div>
        <div>
          <label htmlFor="worldNameid">World name</label>
          <input id="worldNameid" type="text" onChange={this.handleChange} value={worldNameid} />
        </div>
        <div>{this.renderTemplate()}</div>
        <div className="command" onClick={this.onGetWorldClick}>
          getWorld
        </div>
        <div className="command" onClick={this.onSaveWorldClick}>
          saveWorld
        </div>
        <div className="command" onClick={this.onUpdateWorldClick}>
          updateWorld
        </div>
        <div className="command" onClick={this.onStopUpdateClick}>
          stopUpdate
        </div>
      </div>
    );
  }
}

WorldProfile.propTypes = {
  name: PropTypes.string,
  error: PropTypes.string,
  isFetching: PropTypes.bool,
  getWorld: PropTypes.func.isRequired,
  createWorld: PropTypes.func.isRequired,
  updateWorld: PropTypes.func.isRequired,
};
