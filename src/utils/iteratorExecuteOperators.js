import { operatorStore } from "./operatorStore";

export default function iteratorExecuteOperators(map) {
  const { cells } = { ...map };
  cells.forEach(yCells => {
    yCells.forEach(yxCells => {
      if (yxCells && yxCells.length) {
        yxCells.forEach(cell => {
          if (cell.operators && cell.operators.length) {
            cell.operators.forEach(operatorName => {
              if (cell.executedOperators.indexOf(operatorName) < 0) {
                if (operatorStore[operatorName](cell, map)) {
                  cell.executedOperators.push(operatorName);
                }
              }
            });
          }
        });
      }
    });
  });
}
