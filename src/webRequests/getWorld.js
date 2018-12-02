import { SERVER_URL } from "../consts/const";

export default function getWorld(worldName) {
  const url = `${SERVER_URL}/world?name=${worldName}`;

  return fetch(url);
}
