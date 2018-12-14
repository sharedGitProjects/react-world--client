export const OPERATOR_GO_TO_SKULL = "operatorGoToSkull";

export default function operatorGoToSkull(cell, map) {
  const { cells } = map;
  const flatCells = cells.flat(2);
  const yxCells = cells[cell.y][cell.x];

  function findSkullCells() {
    return flatCells.filter(cell => cell.isDead);
  }

  function findAllowGoCells() {
    return flatCells.filter(cell => cell.allowGo);
  }

  function calcDistance(targetX, targetY) {
    return Math.abs(targetY - cell.x) + Math.abs(targetX - cell.y);
  }

  function selectTargetCell(targetCells) {
    const targetXY = { x: cell.x, y: cell.y };
    if (targetCells && targetCells.length) {
      if (targetCells.length === 1) {
        targetXY.x = targetCells[0].x;
        targetXY.y = targetCells[0].y;
      } else {
        let minDistance = 1000;
        let nearCell = null;
        targetCells.forEach(iCell => {
          const distance = calcDistance(iCell.x, iCell.y);
          if (minDistance > distance) {
            minDistance = distance;
            nearCell = iCell;
          }
        });
        targetXY.x = nearCell.x;
        targetXY.y = nearCell.y;
      }
    }

    return targetXY;
  }

  function getNextXY(x, y, targetCell) {
    const nextXY = { x: x, y: y };
    if (targetCell.x > x) {
      nextXY.x++;
    } else if (targetCell.x < x) {
      nextXY.x--;
    } else if (targetCell.y > y) {
      nextXY.y++;
    } else if (targetCell.y < y) {
      nextXY.y--;
    }

    return nextXY;
  }

  function findNextXY(x, y) {
    const skullCells = findSkullCells();
    let targetCell = selectTargetCell(skullCells);
    let nextXY = getNextXY(x, y, targetCell);

    if (!validateXY(nextXY.x, nextXY.y)) {
      const allowGoCells = findAllowGoCells();
      targetCell = selectTargetCell(allowGoCells);
      nextXY = getNextXY(x, y, targetCell);
    }

    return nextXY;
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

  function moveCell(nextXY) {
    cell.x = nextXY.x;
    cell.y = nextXY.y;

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

  const nextXY = findNextXY(cell.x, cell.y);
  if (validateXY(nextXY.x, nextXY.y)) {
    moveCell(nextXY);
    return true;
  }

  return false;
}
