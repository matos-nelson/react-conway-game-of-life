import React from "react";

const Menu = ({ onPlayClick, onPauseClick, onClearClick, onSeedClick }) => {
  return (
    <div className="center">
      <button className="btn btn-default" onClick={onPlayClick}>
        Play
      </button>
      <button className="btn btn-default" onClick={onPauseClick}>
        Pause
      </button>
      <button className="btn btn-default" onClick={onClearClick}>
        Clear
      </button>
      <button className="btn btn-default" onClick={onSeedClick}>
        Seed
      </button>
    </div>
  );
};

export default Menu;
