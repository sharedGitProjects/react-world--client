import { CELL_GRANDPA, CELL_GROUP_FRONT } from "../consts/const";
import buildCellBaseData from "./buildCellBaseData";
import { OPERATOR_GO } from "./operatorGo";

export default function buildCellGrandpaData(x, y) {
  const cell = buildCellBaseData(x, y, CELL_GRANDPA, CELL_GROUP_FRONT);
  cell.operators.push(OPERATOR_GO);
  return cell;
}
