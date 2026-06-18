import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { RotateCcw } from 'lucide-react';

type Player = 'X' | 'O' | null;

export function TicTacToeGame() {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [winner, setWinner] = useState<Player | 'Draw' | null>(null);
  const [gameStarted, setGameStarted] = useState(false);

  const checkWinner = (squares: Player[]): Player | 'Draw' | null => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    if (squares.every((square) => square !== null)) {
      return 'Draw';
    }

    return null;
  };

  // Minimax algorithm for AI
  const minimax = (squares: Player[], isMaximizing: boolean): number => {
    const gameWinner = checkWinner(squares);
    
    if (gameWinner === 'O') return 10;
    if (gameWinner === 'X') return -10;
    if (gameWinner === 'Draw') return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (squares[i] === null) {
          squares[i] = 'O';
          const score = minimax(squares, false);
          squares[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 9; i++) {
        if (squares[i] === null) {
          squares[i] = 'X';
          const score = minimax(squares, true);
          squares[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  };

  const findBestMove = (squares: Player[]): number => {
    let bestScore = -Infinity;
    let bestMove = -1;

    for (let i = 0; i < 9; i++) {
      if (squares[i] === null) {
        squares[i] = 'O';
        const score = minimax(squares, false);
        squares[i] = null;
        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }

    return bestMove;
  };

  const makeAIMove = (currentBoard: Player[]) => {
    const bestMove = findBestMove([...currentBoard]);
    if (bestMove !== -1) {
      setTimeout(() => {
        const newBoard = [...currentBoard];
        newBoard[bestMove] = 'O';
        setBoard(newBoard);
        setIsPlayerTurn(true);

        const gameWinner = checkWinner(newBoard);
        if (gameWinner) {
          setWinner(gameWinner);
        }
      }, 500); // Small delay to make it feel more natural
    }
  };

  const handleClick = (index: number) => {
    if (!gameStarted || board[index] || winner || !isPlayerTurn) return;

    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);
    setIsPlayerTurn(false);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      return;
    }

    // AI makes a move
    makeAIMove(newBoard);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
    setWinner(null);
    setGameStarted(false);
  };

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-card rounded-xl shadow-lg border border-border">
      <div className="flex items-center justify-between w-full">
        <div>
          <h3 className="font-semibold">⭕ Tic-Tac-Toe</h3>
          <p className="text-sm text-muted-foreground">
            {!gameStarted
              ? 'Ready to play?'
              : winner
              ? winner === 'Draw'
                ? "It's a draw!"
                : winner === 'O'
                ? 'Dee wins! 🎉'
                : 'You win! 🎊'
              : isPlayerTurn
              ? "Your turn (X)"
              : "Dee's turn (O)..."}
          </p>
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

      {!gameStarted ? (
        <div className="flex items-center justify-center h-64">
          <Button onClick={startGame} className="hover-sound">
            Play vs Dee
          </Button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-2">
            {board.map((cell, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className="w-20 h-20 flex items-center justify-center text-3xl border-2 border-primary rounded-lg bg-background hover:bg-accent transition-colors disabled:cursor-not-allowed hover-sound"
                disabled={!!cell || !!winner || !isPlayerTurn}
                style={{
                  color: cell === 'X' ? '#E91E63' : cell === 'O' ? '#4CAF50' : 'transparent',
                }}
              >
                {cell}
              </button>
            ))}
          </div>

          {winner && (
            <Button onClick={resetGame} className="hover-sound">
              Play Again
            </Button>
          )}
        </>
      )}

      <p className="text-xs text-muted-foreground text-center">
        You are X, Dee is O
      </p>
    </div>
  );
}
