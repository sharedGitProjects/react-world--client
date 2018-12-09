import iteratorCells from "./iteratorCells";

export default function copyMap(map) {
  const mapJson = JSON.stringify(map);
  const newMap = JSON.parse(mapJson);
  iteratorCells(newMap, cell => (cell.executedOperators = []));

  return newMap;
}
