import { CELL_GRANDMA } from "../../consts/const";

export const OPERATOR_REANIMATE_BY_GRANDMA = "operatorReanimateByGrandma";

export default function operatorReanimateByGrandma(cell, map) {
  if (!cell.isDead) {
    return false;
  }

  let executed = false;
  const yxCells = map.cells[cell.y][cell.x];
  yxCells.forEach(yxCell => {
    if (yxCell.typeName === CELL_GRANDMA) {
      cell.isDead = false;
      executed = true;
      return;
    }
  });

  return executed;
}
