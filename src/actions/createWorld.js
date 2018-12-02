import { CREATE_WORLD_SUCCESS, CREATE_WORLD_FAIL } from "../consts/actions";
import createWorldWebRequest from "../webRequests/createWorld";

export default function createWorld(worldName, worldMap, worldEvents, isSendEvent) {
  return function(dispatch) {
    if (!worldName) {
      dispatch({
        type: CREATE_WORLD_FAIL,
        payload: "worldName is empty",
      });

      return;
    }

    createWorldWebRequest(worldName, worldMap, worldEvents)
      .then(response => response.json())
      .then(data => {
        console.log(data);

        if (isSendEvent) {
          dispatch({
            type: CREATE_WORLD_SUCCESS,
            payload: data.user,
          });
        }
      })
      .catch(error => {
        console.log("Request failed", error);

        dispatch({
          type: CREATE_WORLD_FAIL,
          payload: error,
        });
      });
  };
}
