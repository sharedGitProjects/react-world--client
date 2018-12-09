import { CELL_RIVER, CELL_GROUP_BACK } from "../consts/const";
import buildCellBaseData from "./buildCellBaseData";

export default function buildCellRiverData(x, y) {
  const cell = buildCellBaseData(x, y, CELL_RIVER, CELL_GROUP_BACK);
  cell.offGo = true;
  return cell;
}
