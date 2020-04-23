class Color {
  constructor() {
    this.clear();
  }

  randomColor = function() {
    return Math.floor(Math.random() * (255 - 0 + 1)) + 0;
  };

  rgbToHex = function(rgb) {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex += "0";
    }

    return hex;
  };

  fullColorHex = function(r, g, b) {
    const red = this.rgbToHex(r);
    const green = this.rgbToHex(g);
    const blue = this.rgbToHex(b);
    return "#" + red + green + blue;
  };

  generateRGB() {
    this.red = this.randomColor();
    this.green = this.randomColor();
    this.blue = this.randomColor();
    this.hex = this.fullColorHex(this.red, this.green, this.blue);
  }

  setHex(hexColorValue) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
      hexColorValue
    );
    const rgb = result
      ? {
          red: parseInt(result[1], 16),
          green: parseInt(result[2], 16),
          blue: parseInt(result[3], 16)
        }
      : null;

    if (rgb) {
      this.setRGB(rgb.red, rgb.green, rgb.blue);
      this.hex = hexColorValue;
    } else {
      this.clear();
    }
  }

  setRGB(red, green, blue) {
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.hex = this.fullColorHex(this.red, this.green, this.blue);
  }

  clear() {
    this.red = 255;
    this.green = 255;
    this.blue = 255;
    this.opacity = 0.0;
    this.hex = this.fullColorHex(this.red, this.green, this.blue);
  }

  increaseOpacity() {
    if (this.opacity < 1) {
      this.opacity += 0.1;
    }
  }
}

export default Color;
