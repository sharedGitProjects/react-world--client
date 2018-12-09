import getOperator from "./getOperator";

export default function executedOperators(map) {
  let changed = false;
  map.cells.forEach(yCells =>
    yCells.forEach(yxCells =>
      yxCells.forEach(cell =>
        cell.operators.forEach(operatorName => {
          if (!cell.executedOperators.includes(operatorName) && getOperator(operatorName)(cell, map)) {
            cell.executedOperators.push(operatorName);
            changed = true;
          }
        })
      )
    )
  );

  if (changed) {
    executedOperators(map);
  }
}
