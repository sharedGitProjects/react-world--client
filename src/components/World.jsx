import React from "react";
import PropTypes from "prop-types";
import InhabitantContainer from "./InhabitantContainer";

export default class World extends React.PureComponent {
  static getItems(map) {
    const mapItems = [];

    for (let y = 1; y < map.size.height + 1; y++) {
      for (let x = 1; x < map.size.width + 1; x++) {
        let isExist = false;

        if (map.items && map.items.length) {
          const { items } = map;

          for (let i = 0; i < items.length; i++) {
            if (items[i].cell.x === x && items[i].cell.y === y) {
              mapItems.push(items[i]);
              isExist = true;
              break;
            }
          }
        }

        if (!isExist) {
          const empty = { cell: { x, y }, type: "location" };
          mapItems.push(empty);
        }
      }
    }

    return mapItems;
  }

  renderTemplate = () => {
    const { map, error } = this.props.world;

    if (error) {
      return <p>Ошибка выполнения запроса.</p>;
    }

    if (map && map.size) {
      const items = World.getItems(map);

      return (
        <div className="map">
          {items.map((item) => {
            if (item.type === "inhabitant") {
              return <InhabitantContainer {...item} />;
            }

            return "";
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
