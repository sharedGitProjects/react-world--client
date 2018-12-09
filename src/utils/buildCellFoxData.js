import { CELL_FOX, CELL_GROUP_FRONT } from "../consts/const";
import buildCellBaseData from "./buildCellBaseData";
import { OPERATOR_GO } from "./operatorGo";
import { OPERATOR_DEATH_BY_GRANDPA } from "./operatorDeathByGrandpa";

export default function buildCellFoxData(x, y) {
  const cell = buildCellBaseData(x, y, CELL_FOX, CELL_GROUP_FRONT);
  cell.operators.push(OPERATOR_GO, OPERATOR_DEATH_BY_GRANDPA);
  return cell;
}
