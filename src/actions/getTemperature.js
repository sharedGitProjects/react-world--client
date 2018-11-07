import { SERVER_URL } from "../consts/const";
import getEvent from "./getEvent";

export default function getTemperature() {
  return function (dispatch) {
    const event = "temperature";
    const url = `${SERVER_URL}/event`;

    getEvent(url, event, dispatch);
  };
}
