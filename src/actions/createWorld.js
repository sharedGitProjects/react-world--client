import { SERVER_URL, CREATE_WORLD_SUCCESS, CREATE_WORLD_FAIL } from "../consts/const";

export default function createWorld(worldName, worldMap, worldEvents, isSendEvent) {
  return function (dispatch) {
    if (!worldName) {
      dispatch({
        type: CREATE_WORLD_FAIL,
        payload: "worldName is empty",
      });

      return;
    }

    const name = worldName;
    const url = `${SERVER_URL}/world`;
    fetch(url, {
      method: "post",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        user: name,
        map: worldMap,
        events: worldEvents,
      }),
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data);

        if (isSendEvent) {
          dispatch({
            type: CREATE_WORLD_SUCCESS,
            payload: data.user,
          });
        }
      })
      .catch((error) => {
        console.log("Request failed", error);

        dispatch({
          type: CREATE_WORLD_FAIL,
          payload: error,
        });
      });
  };
}
