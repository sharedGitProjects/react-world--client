import React from "react";
import PropTypes from "prop-types";
import buildWorldData from "../../utils/buildWorldData";
import Command from "../command/Command";

export default class Profile extends React.PureComponent {
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

  handleChange = e => {
    const { id } = e.currentTarget;
    this.setState({ [id]: e.currentTarget.value });
  }

  renderTemplate = () => {
    const { error, isFetching } = this.props.world;

    if (error) {
      return <p>Ошибка выполнения запроса</p>;
    }

    if (isFetching) {
      return <div>Loading...</div>;
    }

    return <Command operation={this.onCreateWorldClick} title="Создать мир" />;
  }

  render() {
    let { worldNameid } = this.state;
    if (!worldNameid) {
      worldNameid = this.props.world.name;
    }

    return (
      <div>
        <input id="worldNameid" type="text" onChange={this.handleChange} value={worldNameid} />
        {this.renderTemplate()}
        <Command operation={this.onGetWorldClick} title="Загрузить мир" />
      </div>
    );
  }
}

Profile.propTypes = {
  name: PropTypes.string,
  error: PropTypes.string,
  isFetching: PropTypes.bool,
  getWorld: PropTypes.func.isRequired,
  createWorld: PropTypes.func.isRequired,
};
