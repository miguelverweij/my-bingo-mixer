interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-cyan-300 to-yellow-300 rounded-none p-1 max-w-xs w-full text-center shadow-2xl animate-[bounce_0.5s_ease-out]" style={{boxShadow: '0 10px 20px rgba(0,0,0,0.6), 0 0 20px rgba(255, 0, 255, 0.5)'}}>
        <div className="bg-cyan-300 p-6 border-4 border-cyan-600" style={{boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.4), inset 0 -3px 0 rgba(0,0,0,0.4)'}}>
          <div className="text-6xl mb-4 animate-pulse">🎉</div>
          <h2 className="text-4xl font-bold text-yellow-500 mb-2" style={{textShadow: '2px 2px 0px #000', color: '#ffff00'}}>BINGO!</h2>
          <p className="text-black font-bold text-lg mb-6">You completed a line!</p>
        
          <button
            onClick={onDismiss}
            className="w-full text-white font-bold py-3 px-6 text-lg border-4 border-cyan-600 rounded-none uppercase transition-all duration-75"
            style={{
              background: 'linear-gradient(135deg, #ff00ff 0%, #ff6600 100%)',
              boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.4), inset 0 -3px 0 rgba(0,0,0,0.5), 0 4px 8px rgba(0,0,0,0.4)'
            }}
            onMouseDown={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = 'inset 0 -2px 0 rgba(255,255,255,0.3), inset 0 2px 0 rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.4)';
            }}
            onMouseUp={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = 'inset 0 2px 0 rgba(255,255,255,0.4), inset 0 -3px 0 rgba(0,0,0,0.5), 0 4px 8px rgba(0,0,0,0.4)';
            }}
        >
          Keep Playing
        </button>
        </div>
      </div>
    </div>
  );
}
