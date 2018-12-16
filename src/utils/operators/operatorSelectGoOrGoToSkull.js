import operatorGo from "./operatorGo";
import operatorGoToSkull from "./operatorGoToSkull";
import selectOperator from "./selectOperator";
import { WORLD_TIME_DAY } from "../../consts/const";

export const OPERATOR_SELECT_GO_OR_GOTOSKULL = "operatorSelectGoOrGoToSkull";

export default (cell, map) => {
  return selectOperator(
    cell,
    map,
    () => {
      return map.time === WORLD_TIME_DAY;
    },
    operatorGoToSkull,
    operatorGo
  );
};
