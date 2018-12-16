import { CELL_GRANDMA, CELL_GROUP_FRONT } from "../../consts/const";
import buildCellBaseData from "./buildCellBaseData";
import { OPERATOR_SELECT_GO_OR_GOTOSKULL } from "../operators/operatorSelectGoOrGoToSkull";

export default function buildCellGrandmaData(x, y) {
  const cell = buildCellBaseData(x, y, CELL_GRANDMA, CELL_GROUP_FRONT);
  cell.operators.push(OPERATOR_SELECT_GO_OR_GOTOSKULL);
  return cell;
}
