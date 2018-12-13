import { CELL_GRANDPA } from "../../consts/const";

export const OPERATOR_DEATH_BY_GRANDPA = "operatorDeathByGrandpa";

export default function operatorDeathByGrandpa(cell, map) {
  if (cell.isDead) {
    return false;
  }

  let executed = false;
  const yxCells = map.cells[cell.y][cell.x];
  yxCells.forEach(yxCell => {
    if (yxCell.typeName === CELL_GRANDPA) {
      cell.isDead = true;
      executed = true;
      return;
    }
  });

  return executed;
}
