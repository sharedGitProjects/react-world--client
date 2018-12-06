import React from "react";
import PropTypes from "prop-types";
import Cell from "../cell/Cell";

export default class World extends React.PureComponent {
  static getCells(map) {
    const mapCells = [];

    if (map.cells && map.cells.length) {
      for (let y = 0; y < map.size.maxY; y++) {
        for (let x = 0; x < map.size.maxX; x++) {
          const yxCells = map.cells[y][x];
          if (yxCells && yxCells.length) {
            for (let z = 0; z < yxCells.length; z++) {
              mapCells.push(yxCells[z]);
            }
          }
        }
      }
    }

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
        <div className="map">
          {cells.map(cell => {
            return <Cell key={cell.id} {...cell} />;
          })}
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
