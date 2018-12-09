import { CELL_FOX } from "../consts/const";

export const OPERATOR_DEATH_BY_FOX = "operatorDeathByFox";

export default function operatorDeathByFox(cell, map) {
  if (cell.isDead) {
    return false;
  }

  let executed = false;
  const yxCells = map.cells[cell.y][cell.x];
  yxCells.forEach(yxCell => {
    if (yxCell.typeName === CELL_FOX) {
      cell.isDead = true;
      cell.offGo = true;
      executed = true;
      return;
    }
  });

  return executed;
}
