export type Grid = (number | null)[];

export const generateGrid = (): Grid => {
  const positions: Grid = Array.from({ length: 15 }, (_, i) => i + 1);
  positions.push(null);

  // Fisher-Yates shuffle
  for (let i = positions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [positions[i], positions[j]] = [positions[j], positions[i]];
  }
  return positions;
};

export const tryMove = (grid: Grid, index: number): Grid | null => {
  const emptyIndex = grid.indexOf(null);

  // Calculate row and column for clicked tile and empty slot
  const row = Math.floor(index / 4);
  const col = index % 4;
  const emptyRow = Math.floor(emptyIndex / 4);
  const emptyCol = emptyIndex % 4;

  const isAdjacent =
    (Math.abs(row - emptyRow) === 1 && col === emptyCol) ||
    (Math.abs(col - emptyCol) === 1 && row === emptyRow);

  if (isAdjacent) {
    const newGrid = [...grid];
    [newGrid[index], newGrid[emptyIndex]] = [
      newGrid[emptyIndex],
      newGrid[index],
    ];
    return newGrid;
  }

  return null;
};

export const checkWin = (grid: Grid): boolean => {
  // Check if the last element is null (empty slot at the end)
  if (grid[grid.length - 1] !== null) return false;

  // Check if all other elements are in order: 1, 2, 3, ...
  for (let i = 0; i < grid.length - 1; i++) {
    if (grid[i] !== i + 1) {
      return false;
    }
  }
  return true;
};
