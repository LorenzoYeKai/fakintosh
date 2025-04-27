import React, { useState, useEffect, useCallback } from "react";

const gridSize = 30;
const cellSize = 20;

const GameOfLife = () => {
  const createEmptyGrid = useCallback(() => {
    return Array(gridSize)
      .fill(null)
      .map(() =>
        Array(gridSize)
          .fill(null)
          .map(() => (Math.random() > 0.7 ? 1 : 0))
      );
  }, []);

  const [grid, setGrid] = useState<number[][]>(createEmptyGrid());
  const [isRunning, setIsRunning] = useState(false);
  const [generation, setGeneration] = useState(0);
  const [population, setPopulation] = useState(0);

  // count live neighbors for a cell
  const countNeighbors = useCallback(
    (grid: number[][], x: number, y: number) => {
      let sum = 0;
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          if (i === 0 && j === 0) continue;
          const row = (x + i + gridSize) % gridSize;
          const col = (y + j + gridSize) % gridSize;
          sum += grid[row][col];
        }
      }
      return sum;
    },
    []
  );

  // calculate next generation
  const nextGeneration = useCallback(() => {
    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((arr) => [...arr]);
      let pop = 0;

      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          const neighbors = countNeighbors(prevGrid, i, j);
          if (prevGrid[i][j] === 1) {
            newGrid[i][j] = neighbors === 2 || neighbors === 3 ? 1 : 0;
          } else {
            newGrid[i][j] = neighbors === 3 ? 1 : 0;
          }
          pop += newGrid[i][j];
        }
      }

      setPopulation(pop);
      setGeneration((g) => g + 1);
      return newGrid;
    });
  }, [countNeighbors]);

  // game loop
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(nextGeneration, 100);
    }
    return () => clearInterval(interval);
  }, [isRunning, nextGeneration]);

  // reset game
  const resetGame = () => {
    setGrid(createEmptyGrid());
    setGeneration(0);
    setPopulation(0);
    setIsRunning(false);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full relative group">
      <div className="flex flex-col items-center absolute top-0 left-0 bg-white p-4 opacity-0 group-hover:opacity-100">
        <div className="mb-4 flex gap-4">
          <button
            className="bg-blue-500 text-white border-none rounded-md px-4 py-2 cursor-pointer"
            onClick={() => setIsRunning(!isRunning)}
          >
            {isRunning ? "pause" : "start"}
          </button>
          <button
            className="bg-red-500 text-white border-none rounded-md px-4 py-2 cursor-pointer"
            onClick={resetGame}
          >
            Reset
          </button>
        </div>
        <div className="mb-4">
          <p>Generation: {generation}</p>
          <p>Population: {population}</p>
        </div>
      </div>

      <div
        className="grid border border-gray-300 aspect-square p-4"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, ${cellSize}px)`,
        }}
      >
        {grid.map((row, i) =>
          row.map((cell, j) => (
            <div
              key={`${i}-${j}`}
              className={`w-[${cellSize}px] h-[${cellSize}px] border border-gray-200 ${
                cell ? "bg-black" : "bg-white"
              }`}
              onClick={() => {
                setGrid((prev) => {
                  const newGrid = prev.map((arr) => [...arr]);
                  newGrid[i][j] = prev[i][j] ? 0 : 1;
                  setPopulation((p) => p + (newGrid[i][j] ? 1 : -1));
                  return newGrid;
                });
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default GameOfLife;
