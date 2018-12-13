import getOperator from "./operators/getOperator";

export default function executedOperators(map) {
  let changed = false;
  map.cells.flat(2).forEach(cell =>
    cell.operators.forEach(operatorName => {
      if (!cell.executedOperators.includes(operatorName) && getOperator(operatorName)(cell, map)) {
        cell.executedOperators.push(operatorName);
        changed = true;
      }
    })
  );

  if (changed) {
    executedOperators(map);
  }
}
