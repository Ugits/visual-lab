import { useState } from "react";
import "./SlidingTiles.css";
import Tile from "./Tile";
import { generateGrid, tryMove, checkWin } from "./brain";

interface SlidingTilesProps {
  isThumbnail?: boolean;
}

const SlidingTiles = ({ isThumbnail }: SlidingTilesProps) => {
  const [grid, setGrid] = useState(generateGrid());
  const isWon = checkWin(grid);

  const handleTileClick = (index: number) => {
    if (isWon) return; // Disable moves after winning

    const newGrid = tryMove(grid, index);
    if (newGrid) {
      setGrid(newGrid);
    }
  };

  return (
    <div className={`sliding-tiles-container ${isThumbnail ? "thumbnail" : ""}`}>
      {isWon && <div className="win-message">You Win!</div>}
      <div className={`game-board ${isWon ? "won" : ""}`}>
        {grid.map((tileNumber, index) => (
          <div
            className="slot"
            key={index}
            onClick={() => handleTileClick(index)}
          >
            {tileNumber !== null && <Tile number={tileNumber} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingTiles;
