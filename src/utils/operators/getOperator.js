import operatorDeathByFox from "./operatorDeathByFox";
import operatorDeathByGrandpa from "./operatorDeathByGrandpa";
import operatorGo from "./operatorGo";
import operatorGoToSkull from "./operatorGoToSkull";
import operatorReanimateByGrandma from "./operatorReanimateByGrandma";
import operatorSelectGoOrGoToSkull from "./operatorSelectGoOrGoToSkull";

const operatorStore = {
  operatorDeathByFox: operatorDeathByFox,
  operatorDeathByGrandpa: operatorDeathByGrandpa,
  operatorGo: operatorGo,
  operatorGoToSkull: operatorGoToSkull,
  operatorReanimateByGrandma: operatorReanimateByGrandma,
  operatorSelectGoOrGoToSkull: operatorSelectGoOrGoToSkull,
};

export default function getOperator(operatorName) {
  return operatorStore[operatorName];
}
