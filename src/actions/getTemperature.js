import getEvent from "./getEvent";

export default function getTemperature() {
  return function(dispatch) {
    const event = "temperature";
    getEvent(event, dispatch);
  };
}
