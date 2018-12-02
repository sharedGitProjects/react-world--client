import { SERVER_URL } from "../consts/const";

export default function getEvent(event) {
  const url = `${SERVER_URL}/event`;

  return fetch(url, {
    method: "post",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      eventName: event,
    }),
  });
}
