interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6">
      <div className="text-center max-w-sm">
        <h1 className="text-5xl font-bold text-white mb-2" style={{textShadow: '3px 3px 0px #000'}}>Bingo Mixer</h1>
        <p className="text-2xl font-bold text-white mb-8" style={{textShadow: '2px 2px 0px #000'}}>Find your people!</p>
        
        <div className="bg-cyan-300 rounded-none p-6 shadow-lg border-4 border-cyan-600 mb-8" style={{ boxShadow: 'var(--shadow-bevel-inset), var(--shadow-thick)' }}>
          <h2 className="font-semibold text-black mb-3 text-lg">How to play</h2>
          <ul className="text-left text-black text-sm space-y-2 font-bold">
            <li>• Find people who match the questions</li>
            <li>• Tap a square when you find a match</li>
            <li>• Get 5 in a row to win!</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full text-white font-bold py-4 px-8 text-lg border-4 border-cyan-600 rounded-none uppercase transition-all duration-75 active:shadow-none"
          style={{
            background: 'var(--gradient-button)',
            boxShadow: 'var(--shadow-bevel-inset), var(--shadow-thick)'
          }}
          onMouseDown={(e) => {
            (e.currentTarget as HTMLButtonElement).style.boxShadow = 'var(--shadow-bevel-inset-pressed), 0 2px 4px rgba(0,0,0,0.4)';
          }}
          onMouseUp={(e) => {
            (e.currentTarget as HTMLButtonElement).style.boxShadow = 'var(--shadow-bevel-inset), var(--shadow-thick)';
          }}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
