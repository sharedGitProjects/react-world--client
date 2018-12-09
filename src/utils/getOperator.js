import operatorGo from "./operatorGo";
import operatorDeathByFox from "./operatorDeathByFox";

const operatorStore = {
  operatorGo: operatorGo,
  operatorDeathByFox: operatorDeathByFox,
};

export default function getOperator(operatorName) {
  return operatorStore[operatorName];
}
