import { Color } from "objects";

class Cell {
  constructor() {
    this.isAlive = false;
    this.color = new Color();
  }

  birth(rgb) {
    this.isAlive = true;
    this.color.opacity = 0.1;
    if (typeof rgb === "object") {
      this.color.setRGB(rgb[0].red, rgb[1].green, rgb[2].blue);
    } else if (typeof rgb === "string") {
      this.color.setHex(rgb);
    }
  }

  death() {
    this.isAlive = false;
    this.color.clear();
  }

  liveOn() {
    this.color.increaseOpacity();
  }
}

export default Cell;
