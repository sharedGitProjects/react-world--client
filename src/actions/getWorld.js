import { GET_WORLD_REQUEST, GET_WORLD_SUCCESS, GET_WORLD_FAIL } from "../consts/actions";
import getWorldWebRequest from "../webRequests/getWorld";

export default function getWorld(worldName) {
  return function(dispatch) {
    if (!worldName) {
      dispatch({
        type: GET_WORLD_FAIL,
        payload: "worldName is empty",
      });

      return;
    }

    dispatch({
      type: GET_WORLD_REQUEST,
    });

    getWorldWebRequest(worldName)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response.json();
      })
      .then(data => {
        console.log(data);

        dispatch({
          type: GET_WORLD_SUCCESS,
          payload: data,
        });
      })
      .catch(error => {
        console.log("Request failed", error);

        dispatch({
          type: GET_WORLD_FAIL,
          payload: error,
        });
      });
  };
}
