import React from "react";
import PropTypes from "prop-types";
import Cell from "../cell/Cell";
import "./style.css";

export default class World extends React.PureComponent {
  static getCells(map) {
    const mapCells = map.cells.flat(3);
    return mapCells;
  }

  renderTemplate = () => {
    const { map, error } = this.props.world;

    if (error) {
      return <p>Ошибка выполнения запроса.</p>;
    }

    if (map && map.size) {
      const cells = World.getCells(map);

      return (
        <div className="worldMap">
          <div className={map.time}>
            <div className="map">
              {cells.map(cell => {
                return <Cell key={cell.id} {...cell} />;
              })}
            </div>
          </div>
        </div>
      );
    }

    return "";
  }

  render() {
    return (
      <div>
        <div classID="worldId">{this.renderTemplate()}</div>
      </div>
    );
  }
}

World.propTypes = {
  map: PropTypes.object,
  error: PropTypes.string,
  isFetching: PropTypes.bool,
};
