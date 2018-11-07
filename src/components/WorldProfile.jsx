import React from "react";
import PropTypes from "prop-types";

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
    const map = {
      size: {
        width: 10,
        height: 10,
      },
      items: [
        {
          cell: { x: 2, y: 3 },
          type: "inhabitant",
          typeName: "Inhabitant1",
        },
        {
          cell: { x: 7, y: 5 },
          type: "inhabitant",
          typeName: "Inhabitant2",
        },
      ],
    };

    const events = [{ 1: 1 }, { 1: 2 }];
    this.props.createWorld(worldNameInput.value, map, events, true);
  }

  onSaveWorldClick = () => {
    const { map } = this.props.world;
    const { name } = this.props.user;

    if (map && name) {
      const events = [{ 1: 1 }, { 1: 2 }];
      this.props.createWorld(name, map, events);
    }
  }

  onUpdateWorldClick = () => {
    const { map } = this.props.world;
    const { name } = this.props.user;

    if (map && name) {
      const events = [{ 1: 1 }, { 1: 2 }];
      this.props.updateWorld({ ...this.props, map, events });
    }
  }

  handleChange = (e) => {
    const { id } = e.currentTarget;
    this.setState({ [id]: e.currentTarget.value });
  }

  renderTemplate = () => {
    const { name, error, isFetching } = this.props.user;
    const { map } = this.props.world;

    if (error) {
      return <p>Ошибка выполнения запроса</p>;
    }

    if (isFetching) {
      return <div>Loading...</div>;
    }

    if (name) {
      const mapJson = JSON.stringify(map);
      return (
        <div>
          <div>{mapJson}</div>
        </div>
      );
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
