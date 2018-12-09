import { UPDATE_WORLD } from "../consts/actions";
import copyMap from "../utils/copyMap";
import iteratorExecuteOperators from "../utils/iteratorExecuteOperators";

export default function updateWorld(data) {
  return function(dispatch) {
    const newMap = copyMap(data.world.map);
    iteratorExecuteOperators(newMap);

    dispatch({
      type: UPDATE_WORLD,
      payload: { ...data.world, newMap },
    });
  };
}
