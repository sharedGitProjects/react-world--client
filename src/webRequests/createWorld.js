import { SERVER_URL } from "../consts/const";

export default function createWorld(worldName, worldMap, worldEvents) {
  const url = `${SERVER_URL}/world`;

  return fetch(url, {
    method: "post",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      user: worldName,
      map: worldMap,
      events: worldEvents,
    }),
  });
}
