import { CELL_RAFT, CELL_GROUP_BACK } from "../consts/const";
import buildCellBaseData from "./buildCellBaseData";

export default function buildCellRaftData(x, y) {
  const cell = buildCellBaseData(x, y, CELL_RAFT, CELL_GROUP_BACK);
  cell.allowGo = true;
  return cell;
}
