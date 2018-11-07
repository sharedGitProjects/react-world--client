import { SERVER_URL } from "../consts/const";
import getEvent from "./getEvent";

export default function getTimeOfday() {
  return function (dispatch) {
    const event = "timeOfday";
    const url = `${SERVER_URL}/event`;

    getEvent(url, event, dispatch);
  };
}
