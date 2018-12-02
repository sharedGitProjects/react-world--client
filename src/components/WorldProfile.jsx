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
          x: 1,
          y: 5,
          type: "location",
          typeName: "River",
          id: "River_01",
        },
        {
          x: 2,
          y: 5,
          type: "location",
          typeName: "River",
          id: "River_02",
        },
        {
          x: 3,
          y: 5,
          type: "location",
          typeName: "River",
          id: "River_03",
        },
        {
          x: 4,
          y: 5,
          type: "location",
          typeName: "River",
          id: "River_04",
        },
        {
          x: 5,
          y: 5,
          type: "location",
          typeName: "River",
          id: "River_05",
        },
        {
          x: 6,
          y: 5,
          type: "location",
          typeName: "River",
          id: "River_06",
        },
        {
          x: 7,
          y: 5,
          type: "location",
          typeName: "River",
          id: "River_07",
        },
        {
          x: 8,
          y: 5,
          type: "location",
          typeName: "River",
          id: "River_08",
        },
        {
          x: 9,
          y: 5,
          type: "location",
          typeName: "River",
          id: "River_09",
        },
        {
          x: 10,
          y: 5,
          type: "location",
          typeName: "River",
          id: "River_10",
        },
        {
          x: 2,
          y: 5,
          type: "location",
          typeName: "Raft",
          id: "Raft_01",
        },
        {
          x: 3,
          y: 5,
          type: "location",
          typeName: "Raft",
          id: "Raft_02",
        },
        {
          x: 6,
          y: 5,
          type: "location",
          typeName: "Raft",
          id: "Raft_03",
        },
        {
          x: 7,
          y: 5,
          type: "location",
          typeName: "Raft",
          id: "Raft_04",
        },
        {
          x: 3,
          y: 2,
          type: "inhabitant",
          typeName: "Fox",
          id: "Fox_01",
        },
        {
          x: 7,
          y: 8,
          type: "inhabitant",
          typeName: "Kolobok",
          id: "Kolobok_01",
        },
      ],
    };

    const events = [{ 1: 1 }, { 1: 2 }];
    this.props.createWorld(worldNameInput.value, map, events, true);
  }

  onSaveWorldClick = () => {
    const { map, name } = this.props.world;

    if (map && name) {
      const events = [{ 1: 1 }, { 1: 2 }];
      this.props.createWorld(name, map, events);
    }
  }

  onUpdateWorldClick = () => {
    const { map, name } = this.props.world;

    if (map && name) {
      const events = [{ 1: 1 }, { 1: 2 }];
      this.props.updateWorld({ ...this.props, map, events });
    }
  }

  handleChange = e => {
    const { id } = e.currentTarget;
    this.setState({ [id]: e.currentTarget.value });
  }

  renderTemplate = () => {
    const { name, error, isFetching, map } = this.props.world;

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
