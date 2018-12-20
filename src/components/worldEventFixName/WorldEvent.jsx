import React from "react";
import PropTypes from "prop-types";
import Command from "../command/Command";

export default class WorldEvent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { temperature: "", time: "", ...props.event };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.event && nextProps.event.event) {
      return { ...prevState, ...nextProps.event.event };
    }
  }

  componentDidMount() {
    this.props.getTimeOfday();
    this.timeOfDayTick = setInterval(this.props.getTimeOfday, 30000);

    this.props.getTemperature();
    this.temperatureTick = setInterval(this.props.getTemperature, 10000);
  }

  componentWillUnmount() {
    if (this.timeOfDayTick) {
      clearInterval(this.timeOfDayTick);
      this.timeOfDayTick = null;
    }

    if (this.temperatureTick) {
      clearInterval(this.temperatureTick);
      this.temperatureTick = null;
    }
  }

  render() {
    return (
      <div>
        <Command operation={this.props.getTemperature} title="Температура" />
        <span>{this.state.temperature}</span>
        <Command operation={this.props.getTimeOfday} title="Время суток" />
        <span>{this.state.time}</span>
      </div>
    );
  }
}

WorldEvent.propTypes = {
  event: PropTypes.object,
  error: PropTypes.string,
  isFetching: PropTypes.bool,
  getTemperature: PropTypes.func.isRequired,
  getTimeOfday: PropTypes.func.isRequired
};
