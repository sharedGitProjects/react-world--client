import {
 SERVER_URL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL 
} from "../consts/const";

export default function getWorld(worldName) {
  return function (dispatch) {
    if (!worldName) {
      dispatch({
        type: LOGIN_FAIL,
        payload: "worldName is empty",
      });

      return;
    }

    dispatch({
      type: LOGIN_REQUEST,
    });

    const url = `${SERVER_URL}/world?name=${worldName}`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response.json();
      })
      .then((data) => {
        console.log(data);

        dispatch({
          type: LOGIN_SUCCESS,
          payload: data,
        });
      })
      .catch((error) => {
        console.log("Request failed", error);

        dispatch({
          type: LOGIN_FAIL,
          payload: error,
        });
      });
  };
}
