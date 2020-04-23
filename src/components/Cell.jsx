import React, { Component } from "react";

class Cell extends Component {
  state = { cellColor: "" };

  updateCellColor() {
    const { data } = this.props;
    const cellColor =
      data && data.color && data.color.hex ? data.color.hex : "#ffffff";
    this.setState({ cellColor });
  }

  componentDidMount() {
    this.updateCellColor();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.updateCellColor();
    }
  }

  handleColorChange = e => {
    const { row, col, onClick } = this.props;
    let hexColor = e.target.value;
    onClick(row, col, hexColor);
  };

  render() {
    const { id, data } = this.props;
    const { cellColor } = this.state;

    const rgbaString =
      "rgba(" +
      data.color.red +
      "," +
      data.color.green +
      "," +
      data.color.blue +
      "," +
      data.color.opacity +
      ")";
    return (
      <div
        id={id}
        className={data && data.isAlive ? "cell" : "cell off"}
        style={data && data.isAlive ? { backgroundColor: rgbaString } : {}}
      >
        <input
          type="color"
          value={cellColor}
          onChange={this.handleColorChange}
        />
      </div>
    );
  }
}

export default Cell;
