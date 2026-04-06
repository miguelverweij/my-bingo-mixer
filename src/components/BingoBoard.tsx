import type { BingoSquareData } from '../types';
import { BingoSquare } from './BingoSquare';

interface BingoBoardProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  onSquareClick: (squareId: number) => void;
}

export function BingoBoard({ board, winningSquareIds, onSquareClick }: BingoBoardProps) {
  return (
    <div className="grid grid-cols-5 gap-1 w-full max-w-md mx-auto aspect-square p-3 border-4 border-cyan-400 rounded-none" style={{background: 'linear-gradient(135deg, #1a0033 0%, #330066 50%, #ff00ff 100%)', boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.2), inset 0 -3px 0 rgba(0,0,0,0.4), 0 6px 12px rgba(0,0,0,0.5)'}}>
      {board.map((square) => (
        <BingoSquare
          key={square.id}
          square={square}
          isWinning={winningSquareIds.has(square.id)}
          onClick={() => onSquareClick(square.id)}
        />
      ))}
    </div>
  );
}
