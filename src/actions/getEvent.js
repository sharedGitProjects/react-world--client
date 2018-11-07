import { EVENT_REQUEST, EVENT_SUCCESS, EVENT_FAIL } from "../consts/const";

export default function getEvent(url, event, dispatch) {
  dispatch({
    type: EVENT_REQUEST,
  });

  fetch(url, {
    method: "post",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      eventName: event,
    }),
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data);

      dispatch({
        type: EVENT_SUCCESS,
        payload: data,
      });
    })
    .catch((error) => {
      console.log("Request failed", error);

      dispatch({
        type: EVENT_FAIL,
        payload: error,
      });
    });
}
