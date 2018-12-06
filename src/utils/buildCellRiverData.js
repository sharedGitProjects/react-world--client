import { CELL_RIVER, CELL_GROUP_BACK } from "../consts/const";
import buildCellBaseData from "./buildCellBaseData";
import { OPERATOR_GO } from "./operatorStore";

export default function buildCellRiverData(x, y) {
  const cell = buildCellBaseData(x, y, CELL_RIVER, CELL_GROUP_BACK);
  cell.bannedOperators.push(OPERATOR_GO);
  return cell;
}
