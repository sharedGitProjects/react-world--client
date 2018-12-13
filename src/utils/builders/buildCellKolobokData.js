import { CELL_KOLOBOK, CELL_GROUP_FRONT } from "../../consts/const";
import buildCellBaseData from "./buildCellBaseData";
import { OPERATOR_GO } from "../operators/operatorGo";
import { OPERATOR_DEATH_BY_FOX } from "../operators/operatorDeathByFox";
import { OPERATOR_REANIMATE_BY_GRANDMA } from "../operators/operatorReanimateByGrandma";

export default function buildCellKolobokData(x, y) {
  const cell = buildCellBaseData(x, y, CELL_KOLOBOK, CELL_GROUP_FRONT);
  cell.operators.push(OPERATOR_GO, OPERATOR_DEATH_BY_FOX, OPERATOR_REANIMATE_BY_GRANDMA);
  return cell;
}
