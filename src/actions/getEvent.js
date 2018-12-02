import { EVENT_REQUEST, EVENT_SUCCESS, EVENT_FAIL } from "../consts/actions";
import getEventWebRequest from "../webRequests/getEvent";

export default function getEvent(event, dispatch) {
  dispatch({
    type: EVENT_REQUEST,
  });

  getEventWebRequest(event)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      dispatch({
        type: EVENT_SUCCESS,
        payload: data,
      });
    })
    .catch(error => {
      console.log("Request failed", error);

      dispatch({
        type: EVENT_FAIL,
        payload: error,
      });
    });
}
