export const OPERATOR_GO = "operatorGo";

export default function operatorGo(cell, map) {
  const { cells } = { ...map };
  const yxCells = cells[cell.y][cell.x];

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getNextXY(x, y) {
    const randomX = getRandomInt(-1, 1);
    const randomY = getRandomInt(-1, 1);

    let nextX = x + randomX;
    let nextY = y + randomY;

    const maxX = map.size.maxX;
    const maxY = map.size.maxY;

    if (nextX < 0) {
      nextX = 1;
    } else if (nextX >= maxX) {
      nextX = maxX - 1;
    }

    if (nextY < 0) {
      nextY = 1;
    } else if (nextY >= maxY) {
      nextY = maxY - 1;
    }

    return { nextX: nextX, nextY: nextY };
  }

  function validateXY(nextX, nextY) {
    const nextYXCells = cells[nextY][nextX];
    if (!nextYXCells.length) {
      return true;
    } else {
      let result = true;
      nextYXCells.forEach(zCell => {
        if (zCell.allowGo) {
          result = true;
          return;
        }
        if (zCell.offGo) {
          result = false;
        }
      });

      return result;
    }
  }

  function moveCell(nextX, nextY) {
    cell.x = nextX;
    cell.y = nextY;

    var z = yxCells
      .map(function(item) {
        return item.id;
      })
      .indexOf(cell.id);

    yxCells.splice(z, 1);
    cells[cell.y][cell.x].push(cell);
  }

  if (cell.isDead) {
    return false;
  }

  const { nextX, nextY } = getNextXY(cell.x, cell.y);
  if (validateXY(nextX, nextY)) {
    moveCell(nextX, nextY);
    return true;
  }

  return false;
}
