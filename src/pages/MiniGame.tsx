import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, RotateCcw, Play, LayoutGrid, Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const GRID_SIZE = 3;
const TILE_COUNT = GRID_SIZE * GRID_SIZE;

export default function Puzzle() {
  const [tiles, setTiles] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const initTiles = useCallback(() => {
    const newTiles = Array.from({ length: TILE_COUNT }, (_, i) => i);
    setTiles(newTiles);
    setMoves(0);
    setTime(0);
    setIsGameOver(false);
    setIsGameStarted(false);
  }, []);

  useEffect(() => {
    initTiles();
  }, [initTiles]);

  useEffect(() => {
    let timer: any;
    if (isGameStarted && !isGameOver) {
      timer = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isGameStarted, isGameOver]);

  const getNeighbors = (index: number) => {
    const neighbors = [];
    const row = Math.floor(index / GRID_SIZE);
    const col = index % GRID_SIZE;

    if (row > 0) neighbors.push(index - GRID_SIZE);
    if (row < GRID_SIZE - 1) neighbors.push(index + GRID_SIZE);
    if (col > 0) neighbors.push(index - 1);
    if (col < GRID_SIZE - 1) neighbors.push(index + 1);

    return neighbors;
  };

  const shuffle = useCallback(() => {
    let newTiles = Array.from({ length: TILE_COUNT }, (_, i) => i);
    // Perform a series of valid moves to ensure solvability
    let emptyIndex = TILE_COUNT - 1;
    
    for (let i = 0; i < 100; i++) {
      const neighbors = getNeighbors(emptyIndex);
      const randomNeighbor = neighbors[Math.floor(Math.random() * neighbors.length)];
      [newTiles[emptyIndex], newTiles[randomNeighbor]] = [newTiles[randomNeighbor], newTiles[emptyIndex]];
      emptyIndex = randomNeighbor;
    }

    setTiles(newTiles);
    setMoves(0);
    setTime(0);
    setIsGameOver(false);
    setIsGameStarted(true);
  }, []);

  useEffect(() => {
    if (isGameOver) {
      const timer = setTimeout(() => {
        shuffle();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isGameOver, shuffle]);

  const handleTileClick = (index: number) => {
    if (isGameOver || !isGameStarted) return;

    const emptyIndex = tiles.indexOf(TILE_COUNT - 1);
    const neighbors = getNeighbors(index);

    if (neighbors.includes(emptyIndex)) {
      const newTiles = [...tiles];
      [newTiles[index], newTiles[emptyIndex]] = [newTiles[emptyIndex], newTiles[index]];
      setTiles(newTiles);
      setMoves((m) => m + 1);

      if (checkWin(newTiles)) {
        setIsGameOver(true);
      }
    }
  };

  const checkWin = (currentTiles: number[]) => {
    return currentTiles.every((tile, index) => tile === index);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative">
      <Link 
        to="/" 
        className="absolute top-10 left-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors group"
      >
        <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-indigo-500/50 transition-colors">
          <HomeIcon size={14} />
        </div>
        Back to Home 
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Game Info */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-[10px] font-black uppercase tracking-[0.2em] border border-orange-500/20">
              Mini Game
            </div>
            <h1 className="text-6xl font-black text-white uppercase tracking-tighter leading-none">
              Sliding <span className="text-orange-500">Puzzle</span>
            </h1>
            <p className="text-slate-400 font-medium leading-relaxed">
              Arrange the tiles in numerical order from 1 to 8. The bottom-right corner 
              should be empty. Can you solve it in record time?
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-6 flex flex-col items-center justify-center space-y-2">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Moves</span>
              <span className="text-3xl font-black text-white">{moves}</span>
            </div>
            <div className="glass-card p-6 flex flex-col items-center justify-center space-y-2">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Time</span>
              <span className="text-3xl font-black text-white">{Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}</span>
            </div>
          </div>

          <button
            onClick={shuffle}
            className="w-full py-6 bg-orange-600 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transition-all hover:bg-orange-500 shadow-2xl shadow-orange-500/40 active:scale-95 flex items-center justify-center gap-3"
          >
            {isGameStarted ? <RotateCcw size={18} /> : <Play size={18} />}
            {isGameStarted ? 'Restart Game' : 'Start Mission'}
          </button>
        </div>

        {/* Game Board */}
        <div className="lg:col-span-2 flex items-center justify-center">
          <div className="relative p-4 glass-card border-orange-500/20 bg-orange-500/5 rounded-[2rem]">
            <div 
              className="grid gap-4 bg-slate-900/50 p-4 rounded-[1.5rem]"
              style={{ 
                gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
                width: 'min(90vw, 450px)',
                height: 'min(90vw, 450px)'
              }}
            >
              {tiles.map((tile, i) => (
                <motion.button
                  key={tile}
                  layout
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 25
                  }}
                  onClick={() => handleTileClick(i)}
                  whileHover={tile !== TILE_COUNT - 1 ? { scale: 1.02, y: -2 } : {}}
                  whileTap={tile !== TILE_COUNT - 1 ? { scale: 0.95 } : {}}
                  className={`
                    relative rounded-2xl flex items-center justify-center text-3xl font-black transition-all
                    ${tile === TILE_COUNT - 1 
                      ? 'bg-transparent border-2 border-dashed border-slate-800' 
                      : 'bg-slate-800 text-white shadow-xl hover:bg-slate-700 border border-white/5 active:scale-95'}
                    ${isGameOver && tile !== TILE_COUNT - 1 ? 'bg-orange-600 border-orange-400' : ''}
                  `}
                >
                  {tile !== TILE_COUNT - 1 && (
                    <>
                      <span className="relative z-10">{tile + 1}</span>
                      <div className="absolute top-2 right-2 opacity-10">
                        <LayoutGrid size={14} />
                      </div>
                    </>
                  )}
                </motion.button>
              ))}
            </div>

            <AnimatePresence>
              {isGameOver && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-950/80 backdrop-blur-md rounded-[2rem] p-8 text-center"
                >
                  <Trophy size={80} className="text-orange-500 mb-6 animate-bounce" />
                  <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-2">Mission Accomplished!</h2>
                  <p className="text-slate-400 mb-4 font-medium">You solved it in {moves} moves and {time} seconds.</p>
                  <p className="text-orange-500 text-[10px] font-black uppercase tracking-widest animate-pulse">Auto-refreshing in 3 seconds...</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
