import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-1 text-center border-4 rounded-none transition-all duration-75 select-none min-h-[60px] text-xs leading-tight font-bold uppercase';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-bingo border-yellow-600 text-yellow-900'
      : 'bg-marked border-marked-border text-black'
    : 'bg-white text-gray-900 border-gray-900 hover:bg-cyan-100';

  const freeSpaceClasses = square.isFreeSpace ? 'font-bold text-sm' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses} cursor-pointer`}
      style={isWinning ? {
        boxShadow: '0 0 8px rgba(255, 255, 0, 0.8), var(--shadow-bevel-inset)'
      } : square.isMarked ? {
        boxShadow: '0 0 8px rgba(57, 255, 20, 0.6), var(--shadow-bevel-inset)'
      } : {
        boxShadow: 'var(--shadow-bevel-inset)'
      }}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-0.5 right-0.5 text-black text-sm font-bold">✓</span>
      )}
    </button>
  );
}
