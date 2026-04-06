import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
      <div className="flex flex-col min-h-full" style={{background: 'linear-gradient(135deg, #ff00ff 0%, #ff6600 50%, #ffff00 100%)'}}>
      {/* Header */}
        <header className="flex items-center justify-between p-3 border-b-4 border-cyan-600" style={{background: 'linear-gradient(90deg, #0099ff 0%, #00d4ff 50%, #00ff00 100%)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.3)'}}>
        <button
          onClick={onReset}
            className="text-black font-bold text-sm px-3 py-1.5 rounded-none border-2 border-black transition-all duration-75" style={{background: '#ffff00', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.3)'}}
        >
          ← Back
        </button>
          <h1 className="font-bold text-white text-xl" style={{textShadow: '2px 2px 0px #000'}}>Bingo Mixer</h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
        <p className="text-center text-black font-bold text-sm py-2 px-4">
        Tap a square when you find someone who matches it.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
          <div className="bg-yellow-300 text-black text-center py-2 font-bold text-sm border-b-4 border-yellow-600">
          🎉 BINGO! You got a line!
        </div>
      )}

      {/* Board */}
        <div className="flex-1 flex items-center justify-center p-3 bg-gradient-to-b from-purple-700 to-magenta-700">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
