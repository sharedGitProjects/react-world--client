import React from "react";
import PropTypes from "prop-types";
import Command from "../command/Command";

export default class Toolbar extends React.PureComponent {
  state = {
    worldNameid: "",
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

  render() {
    return (
      <div className="toolbar">
        <Command operation={this.onSaveWorldClick} title="Сохранить мир" />
        <Command operation={this.onUpdateWorldClick} title="Обновить мир" />
        <Command operation={this.onStopUpdateClick} title="Остановить обновление" />
      </div>
    );
  }
}

Toolbar.propTypes = {
  name: PropTypes.string,
  error: PropTypes.string,
  isFetching: PropTypes.bool,
  createWorld: PropTypes.func.isRequired,
  updateWorld: PropTypes.func.isRequired,
};
