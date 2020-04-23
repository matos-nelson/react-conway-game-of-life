import { Cell } from "objects";
import { arrayUtils } from "utilities";

class Grid {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.layout = [];
    this.reset();
  }

  reset() {
    for (let x = 0; x < this.rows; x++) {
      this.layout[x] = [];
      for (let y = 0; y < this.cols; y++) {
        this.layout[x][y] = new Cell();
      }
    }
  }

  seed() {
    this.reset();
    const randomLayout = this.layout.map(rowArr =>
      rowArr.map(item => {
        if (Math.floor(Math.random() * 4) === 1) {
          item.isAlive = !item.isAlive;
          if (item.isAlive) {
            item.color.generateRGB();
          } else {
            item.color.clear();
          }
          return item;
        }
        return item;
      })
    );

    this.layout = randomLayout;
  }

  traverse() {
    const currentGridState = this.layout;
    let newGridState = arrayUtils.copy(currentGridState);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let count = 0;
        let cellColors = [];

        // left neighbor
        if (j > 0 && currentGridState[i][j - 1].isAlive) {
          count++;
          cellColors.push(currentGridState[i][j - 1].color);
        }

        // left up neighbor
        if (i > 0 && j > 0 && currentGridState[i - 1][j - 1].isAlive) {
          count++;
          cellColors.push(currentGridState[i - 1][j - 1].color);
        }

        // up neighbor
        if (i > 0 && currentGridState[i - 1][j].isAlive) {
          count++;
          cellColors.push(currentGridState[i - 1][j].color);
        }

        // right up neighbor
        if (
          i > 0 &&
          j < this.cols - 1 &&
          currentGridState[i - 1][j + 1].isAlive
        ) {
          count++;
          cellColors.push(currentGridState[i - 1][j + 1].color);
        }

        // right neighbor
        if (j < this.cols - 1 && currentGridState[i][j + 1].isAlive) {
          count++;
          cellColors.push(currentGridState[i][j + 1].color);
        }

        // down right neighbor
        if (
          i < this.rows - 1 &&
          j < this.cols - 1 &&
          currentGridState[i + 1][j + 1].isAlive
        ) {
          count++;
          cellColors.push(currentGridState[i + 1][j + 1].color);
        }

        // down neighbor
        if (i < this.rows - 1 && currentGridState[i + 1][j].isAlive) {
          count++;
          cellColors.push(currentGridState[i + 1][j].color);
        }

        // down left neighbor
        if (
          i < this.rows - 1 &&
          j > 0 &&
          currentGridState[i + 1][j - 1].isAlive
        ) {
          count++;
          cellColors.push(currentGridState[i + 1][j - 1].color);
        }

        // update status
        if (currentGridState[i][j].isAlive && (count < 2 || count > 3)) {
          newGridState[i][j].death();
        } else if (
          !currentGridState[i][j].isAlive &&
          count === 3 &&
          cellColors.length === 3
        ) {
          newGridState[i][j].birth(cellColors);
        } else if (currentGridState[i][j].isAlive) {
          newGridState[i][j].liveOn();
        }
      }
    }

    this.layout = newGridState;
  }
}

export default Grid;
