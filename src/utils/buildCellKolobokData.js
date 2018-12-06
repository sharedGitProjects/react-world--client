import { CELL_KOLOBOK, CELL_GROUP_FRONT } from "../consts/const";
import buildCellBaseData from "./buildCellBaseData";
import { OPERATOR_GO } from "./operatorStore";

export default function buildCellKolobokData(x, y) {
  const cell = buildCellBaseData(x, y, CELL_KOLOBOK, CELL_GROUP_FRONT);
  cell.operators.push(OPERATOR_GO);
  return cell;
}
