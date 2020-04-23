import React, { Component } from "react";
import { Slider, Menu, Grid as GridComponent } from "components";
import { Grid } from "objects";

class ConwayGame extends Component {
  rows = 40;
  cols = 40;
  MIN_SPEED = 0;
  MAX_SPEED = 3500;
  constructor() {
    super();
    const grid = new Grid(this.rows, this.cols);

    this.state = {
      speed: this.MAX_SPEED / 2,
      grid
    };
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  handleSpeedChange = e => {
    const speed = Number(e.target.value);
    this.setState({ speed });
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.traverseGrid, this.MAX_SPEED - speed);
  };

  handleCellClick = (row, col, color) => {
    const gridLayout = this.state.grid.layout.map((rowArr, rowIdx) =>
      rowArr.map((item, colIdx) => {
        if (rowIdx === row && colIdx === col) {
          item.birth(color);
          return item;
        }

        return item;
      })
    );
    this.setState(() => ({ gridLayout }));
  };

  handleSeed = () => {
    const { grid } = this.state;
    grid.seed();
    this.setState(() => ({ grid }));
  };

  handlePlay = () => {
    const { speed } = this.state;

    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.traverseGrid, this.MAX_SPEED - speed);
  };

  handlePause = () => {
    clearInterval(this.intervalId);
  };

  handleClear = () => {
    const { grid } = this.state;
    this.handlePause();
    grid.reset();
    this.setState({ grid });
  };

  traverseGrid = () => {
    const { grid, speed } = this.state;

    grid.traverse();
    this.setState(prevState => ({ grid, speed }));
  };

  render() {
    const { grid, speed } = this.state;

    return (
      <div>
        <h1 className="center">Conway: The Game of Life</h1>
        <div className="center">
          <Slider
            min={this.MIN_SPEED}
            max={this.MAX_SPEED}
            value={speed}
            label={"Game Speed"}
            onChange={this.handleSpeedChange}
          />
        </div>
        <Menu
          onPlayClick={this.handlePlay}
          onPauseClick={this.handlePause}
          onClearClick={this.handleClear}
          onSeedClick={this.handleSeed}
        />
        <GridComponent
          layout={grid.layout}
          rows={this.rows}
          cols={this.cols}
          onClick={this.handleCellClick}
        />
      </div>
    );
  }
}

export default ConwayGame;
