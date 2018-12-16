export default (cell, map, condition, operatorIfTrue, operatorIfFalse) => {
  if (condition()) {
    return operatorIfTrue(cell, map);
  } else {
    return operatorIfFalse(cell, map);
  }
};
