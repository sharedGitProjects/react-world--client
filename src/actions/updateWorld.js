import { UPDATE_WORLD } from "../consts/actions";

export default function updateWorld(data) {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return function(dispatch) {
    const { map } = { ...data.world };
    const newItems = [];

    for (let i = 0; i < map.items.length; i++) {
      const item = { ...map.items[i] };

      if (item.type === "inhabitant") {
        const randomX = getRandomInt(-1, 1);
        const randomY = getRandomInt(-1, 1);

        let nextX = item.x + randomX;
        let nextY = item.y + randomY;

        if (nextX < 1) {
          nextX = 2;
        } else if (nextX > map.size.width) {
          nextX = map.size.width - 1;
        }
        item.x = nextX;

        if (nextY < 1) {
          nextY = 2;
        } else if (nextY > map.size.height) {
          nextY = map.size.height - 1;
        }
        item.y = nextY;
      } else if (item.type === "location") {
      }

      newItems.push(item);
    }

    const newMap = { ...map, items: newItems };
    dispatch({
      type: UPDATE_WORLD,
      payload: { ...data.world, newMap },
    });
  };
}
