export default (map, operation) =>
  map.cells.forEach(yCells => yCells.forEach(yxCells => yxCells.forEach(cell => operation(cell))));
