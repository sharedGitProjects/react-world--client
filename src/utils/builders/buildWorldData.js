import buildCellFoxData from "./buildCellFoxData";
import buildCellGrandmaData from "./buildCellGrandmaData";
import buildCellGrandpaData from "./buildCellGrandpaData";
import buildCellKolobokData from "./buildCellKolobokData";
import buildCellRaftData from "./buildCellRaftData";
import buildCellRiverData from "./buildCellRiverData";
import { WORLD_TIME_DAY } from "../../consts/const";

export default function buildWorldData() {
  const map = {
    time: WORLD_TIME_DAY,
    size: {
      maxX: 10,
      maxY: 10,
    },
    cells: [],
  };

  const dataCells = [
    buildCellRiverData(0, 4),
    buildCellRiverData(1, 4),
    buildCellRiverData(2, 4),
    buildCellRiverData(3, 4),
    buildCellRiverData(4, 4),
    buildCellRiverData(5, 4),
    buildCellRiverData(6, 4),
    buildCellRiverData(7, 4),
    buildCellRiverData(8, 4),
    buildCellRiverData(9, 4),

    buildCellRaftData(2, 4),
    buildCellRaftData(3, 4),
    buildCellRaftData(6, 4),
    buildCellRaftData(7, 4),

    buildCellFoxData(3, 8),
    buildCellFoxData(6, 8),

    buildCellKolobokData(3, 7),
    buildCellKolobokData(6, 7),

    buildCellGrandmaData(4, 2),
    buildCellGrandpaData(5, 6),
  ];

  function findCells(x, y, allCells) {
    const cells = [];
    if (!allCells) {
      return cells;
    }

    for (let i = 0; i < allCells.length; i++) {
      let cell = allCells[i];
      if (cell.x === x && cell.y === y) {
        cells.push(cell);
      }
    }

    return cells;
  }

  for (let iy = 0; iy < map.size.maxY; iy++) {
    map.cells[iy] = [];
    for (let ix = 0; ix < map.size.maxX; ix++) {
      map.cells[iy][ix] = findCells(ix, iy, dataCells);
    }
  }

  return map;
}
