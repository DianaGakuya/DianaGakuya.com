import React from 'react';
import { SnakeGame } from './SnakeGame';
import { TicTacToeGame } from './TicTacToeGame';

export function MiniGames() {
  return (
    <section id="games" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            🎮 Take a Break
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Need a quick break while browsing? Play these mini games and have some fun!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <SnakeGame />
          <TicTacToeGame />
        </div>
      </div>
    </section>
  );
}
