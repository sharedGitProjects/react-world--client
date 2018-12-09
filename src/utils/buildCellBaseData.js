export default function buildCellBaseData(x, y, cellType, cellGroup) {
  return {
    x: x,
    y: y,
    type: cellGroup,
    typeName: cellType,
    id: `${cellType}_${x}_${y}`,
    operators: [],
    executedOperators: [],
  };
}
