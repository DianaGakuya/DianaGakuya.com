import React, { useState, useEffect, useCallback } from 'react';
import { Button } from './ui/button';
import { RotateCcw } from 'lucide-react';

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type Position = { x: number; y: number };

export function SnakeGame() {
  const gridSize = 15;
  const cellSize = 20;
  const initialSnake: Position[] = [{ x: 7, y: 7 }];
  const initialDirection: Direction = 'RIGHT';

  const [snake, setSnake] = useState<Position[]>(initialSnake);
  const [food, setFood] = useState<Position>({ x: 10, y: 10 });
  const [direction, setDirection] = useState<Direction>(initialDirection);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const generateFood = useCallback(() => {
    const newFood: Position = {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize),
    };
    return newFood;
  }, []);

  const resetGame = () => {
    setSnake(initialSnake);
    setDirection(initialDirection);
    setFood(generateFood());
    setGameOver(false);
    setScore(0);
    setIsPlaying(false);
  };

  const moveSnake = useCallback(() => {
    if (gameOver || !isPlaying) return;

    setSnake((prevSnake) => {
      const head = prevSnake[0];
      let newHead: Position;

      switch (direction) {
        case 'UP':
          newHead = { x: head.x, y: head.y - 1 };
          break;
        case 'DOWN':
          newHead = { x: head.x, y: head.y + 1 };
          break;
        case 'LEFT':
          newHead = { x: head.x - 1, y: head.y };
          break;
        case 'RIGHT':
          newHead = { x: head.x + 1, y: head.y };
          break;
      }

      // Wrap around walls instead of game over
      if (newHead.x < 0) newHead.x = gridSize - 1;
      if (newHead.x >= gridSize) newHead.x = 0;
      if (newHead.y < 0) newHead.y = gridSize - 1;
      if (newHead.y >= gridSize) newHead.y = 0;

      // Check self collision
      if (prevSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)) {
        setGameOver(true);
        setIsPlaying(false);
        return prevSnake;
      }

      const newSnake = [newHead, ...prevSnake];

      // Check food collision
      if (newHead.x === food.x && newHead.y === food.y) {
        setScore((prev) => prev + 1);
        setFood(generateFood());
        return newSnake;
      }

      // Remove tail if no food eaten
      newSnake.pop();
      return newSnake;
    });
  }, [direction, food, gameOver, isPlaying, generateFood]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isPlaying) return;

      // Prevent page scrolling when using arrow keys
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();
      }

      switch (e.key) {
        case 'ArrowUp':
          if (direction !== 'DOWN') setDirection('UP');
          break;
        case 'ArrowDown':
          if (direction !== 'UP') setDirection('DOWN');
          break;
        case 'ArrowLeft':
          if (direction !== 'RIGHT') setDirection('LEFT');
          break;
        case 'ArrowRight':
          if (direction !== 'LEFT') setDirection('RIGHT');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction, isPlaying]);

  useEffect(() => {
    const gameLoop = setInterval(moveSnake, 150);
    return () => clearInterval(gameLoop);
  }, [moveSnake]);

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-card rounded-xl shadow-lg border border-border">
      <div className="flex items-center justify-between w-full">
        <div>
          <h3 className="font-semibold">🐍 Snake Game</h3>
          <p className="text-sm text-muted-foreground">Score: {score}</p>
          <p className="text-xs text-primary mt-1">Dee's highest: 27 - try beat me! 😊</p>
        </div>
        <Button
          onClick={resetGame}
          size="sm"
          variant="outline"
          className="hover-sound"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>

      <div
        className="relative border-2 border-primary rounded-lg overflow-hidden"
        style={{
          width: gridSize * cellSize,
          height: gridSize * cellSize,
          backgroundColor: 'var(--background)',
        }}
      >
        {/* Snake */}
        {snake.map((segment, index) => (
          <div
            key={index}
            className="absolute transition-all duration-100"
            style={{
              left: segment.x * cellSize,
              top: segment.y * cellSize,
              width: cellSize,
              height: cellSize,
              backgroundColor: index === 0 ? '#E91E63' : '#F7C6D0',
              borderRadius: '2px',
            }}
          />
        ))}

        {/* Food */}
        <div
          className="absolute animate-pulse"
          style={{
            left: food.x * cellSize,
            top: food.y * cellSize,
            width: cellSize,
            height: cellSize,
            backgroundColor: '#4CAF50',
            borderRadius: '50%',
          }}
        />

        {/* Game Over Overlay */}
        {gameOver && (
          <div className="absolute inset-0 bg-background/90 flex items-center justify-center">
            <div className="text-center">
              <p className="text-xl mb-2">Game Over!</p>
              <p className="text-sm text-muted-foreground mb-4">Score: {score}</p>
              <Button onClick={resetGame} size="sm" className="hover-sound">
                Play Again
              </Button>
            </div>
          </div>
        )}

        {/* Start Overlay */}
        {!isPlaying && !gameOver && (
          <div className="absolute inset-0 bg-background/90 flex items-center justify-center">
            <Button onClick={() => setIsPlaying(true)} className="hover-sound">
              Start Game
            </Button>
          </div>
        )}
      </div>

      <p className="text-xs text-muted-foreground text-center">
        Use arrow keys to control
      </p>
    </div>
  );
}