import operatorGo from "./operatorGo";
import operatorDeathByFox from "./operatorDeathByFox";
import operatorDeathByGrandpa from "./operatorDeathByGrandpa";
import operatorReanimateByGrandma from "./operatorReanimateByGrandma";

const operatorStore = {
  operatorGo: operatorGo,
  operatorDeathByFox: operatorDeathByFox,
  operatorDeathByGrandpa: operatorDeathByGrandpa,
  operatorReanimateByGrandma: operatorReanimateByGrandma,
};

export default function getOperator(operatorName) {
  return operatorStore[operatorName];
}
