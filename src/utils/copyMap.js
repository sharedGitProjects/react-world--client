export default function copyMap(map) {
  const newCells = [];
  for (let iy = 0; iy < map.size.maxY; iy++) {
    newCells[iy] = [];
    for (let ix = 0; ix < map.size.maxX; ix++) {
      newCells[iy][ix] = [];
      const yxCells = map.cells[iy][ix];
      if (yxCells && yxCells.length) {
        for (let iz = 0; iz < yxCells.length; iz++) {
          const newCell = { ...yxCells[iz], executedOperators: [] };
          newCells[iy][ix].push(newCell);
        }
      }
    }
  }

  const newMap = { ...map, cells: newCells };
  return newMap;
}
