export default (map, operation) => map.cells.flat(2).forEach(cell => operation(cell));
