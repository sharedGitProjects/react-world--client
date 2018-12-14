import { CELL_GRANDMA, CELL_GROUP_FRONT } from "../../consts/const";
import buildCellBaseData from "./buildCellBaseData";
import { OPERATOR_GO_TO_SKULL } from "../operators/operatorGoToSkull";

export default function buildCellGrandmaData(x, y) {
  const cell = buildCellBaseData(x, y, CELL_GRANDMA, CELL_GROUP_FRONT);
  cell.operators.push(OPERATOR_GO_TO_SKULL);
  return cell;
}
