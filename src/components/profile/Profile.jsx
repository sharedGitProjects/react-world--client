import React from "react";
import PropTypes from "prop-types";
import buildWorldData from "../../utils/builders/buildWorldData";
import Command from "../command/Command";

export default class Profile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { worldName: props.world.name };
  }

  onGetWorldClick = () => {
    this.props.getWorld(this.state.worldName);
  }

  onCreateWorldClick = () => {
    const map = buildWorldData();
    const events = [];
    this.props.createWorld(this.state.worldName, map, events, true);
  }

  handleChange = event => {
    const { value } = event.currentTarget;
    this.setState({ worldName: value });
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
    return (
      <div>
        <input type="text" onChange={this.handleChange} value={this.state.worldName} />
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
