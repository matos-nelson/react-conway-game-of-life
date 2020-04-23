import React from "react";
import { Cell } from "components";

const Grid = ({ layout, onClick }) => {
  const width = 640;
  const rowsArr = layout.map((rowArr, rowIdx) =>
    rowArr.map((item, colIdx) => {
      const id = rowIdx + "_" + colIdx;
      return (
        <Cell
          key={id}
          id={id}
          row={rowIdx}
          col={colIdx}
          data={item}
          onClick={onClick}
        />
      );
    })
  );

  return (
    <div className="container grid" style={{ width }}>
      {rowsArr}
    </div>
  );
};

export default Grid;
