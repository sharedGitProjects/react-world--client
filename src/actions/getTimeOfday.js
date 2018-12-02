import getEvent from "./getEvent";

export default function getTimeOfday() {
  return function(dispatch) {
    const event = "timeOfday";
    getEvent(event, dispatch);
  };
}
