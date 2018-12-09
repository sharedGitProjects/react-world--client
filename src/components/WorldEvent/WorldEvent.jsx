import React from "react";
import PropTypes from "prop-types";
import Command from "../command/Command";

export default class WorldEvent extends React.PureComponent {
  renderTemplate = () => {
    const { event, error } = this.props.event;

    if (error) {
      return <p>Ошибка выполнения запроса</p>;
    }

    if (event) {
      if (event.temperature) {
        return (
          <div>
            <span>temperature:</span>
            <span>{event.temperature}</span>
          </div>
        );
      }
      if (event.time) {
        return (
          <div>
            <span>time:</span>
            <span>{event.time}</span>
          </div>
        );
      }
    }

    return "";
  }

  render() {
    return (
      <div>
        <Command operation={this.props.getTemperature} title="Температура" />
        <Command operation={this.props.getTimeOfday} title="Время суток" />
        <div>{this.renderTemplate()}</div>
      </div>
    );
  }
}

WorldEvent.propTypes = {
  event: PropTypes.object,
  error: PropTypes.string,
  isFetching: PropTypes.bool,
  getTemperature: PropTypes.func.isRequired,
  getTimeOfday: PropTypes.func.isRequired,
};
