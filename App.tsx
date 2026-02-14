import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import FallingHearts from './components/FallingHearts';
import Envelope from './components/Envelope';
import MusicPlayer from './components/MusicPlayer';
import Countdown from './components/Countdown';
import PhotoGallery from './components/PhotoGallery';
import PoemGenerator from './components/PoemGenerator';
import MemoryGame from './components/MemoryGame';
import ReasonsWhy from './components/ReasonsWhy';
import bgImage from './assets/images/romantic-bg.png';

type Step = 'welcome' | 'game' | 'envelope' | 'content';

function App() {
  const [step, setStep] = useState<Step>('welcome');

  return (
    <div 
      className="min-h-screen w-full overflow-x-hidden relative font-serif"
      style={{ 
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-pink-50/30 pointer-events-none z-0" />
      
      <FallingHearts />
      <MusicPlayer />

      <main className="relative z-10 container mx-auto px-4 py-12 flex flex-col gap-16 min-h-screen">
        
        {step === 'welcome' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center min-h-[80vh] text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-pink-600 mb-6 font-['Dancing_Script'] drop-shadow-sm">
              Hi Crystabel!
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-medium">
              I made this just for you <br />
              Play a little game to unlock your surprise
            </p>
            <button 
              onClick={() => setStep('game')}
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center gap-3"
            >
              <Play fill="currentColor" size={20} />
              Start Game
            </button>
          </motion.div>
        )}

        {step === 'game' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center min-h-[80vh]"
          >
            <MemoryGame onComplete={() => setStep('envelope')} />
          </motion.div>
        )}

        {(step === 'envelope' || step === 'content') && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col gap-20"
          >
            <section className="min-h-[80vh] flex flex-col items-center justify-center pt-20">
              <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-8 font-['Dancing_Script'] drop-shadow-sm text-center">
                Happy Valentine's Day
              </h1>
              <Envelope onOpen={() => setTimeout(() => setStep('content'), 1000)} />
            </section>

            {step === 'content' && (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col gap-20 pb-20"
              >
                {/* Countdown Section */}
                <section>
                  <Countdown />
                </section>

                {/* Reasons Why Section */}
                <section>
                  <ReasonsWhy />
                </section>

                {/* Poem Generator */}
                <section>
                  <PoemGenerator />
                </section>

                {/* Photo Gallery */}
                <section>
                  <PhotoGallery />
                </section>

                {/* Final Greeting */}
                <section className="text-center py-12">
                  <h2 className="text-4xl md:text-6xl font-bold text-pink-600 font-['Dancing_Script'] drop-shadow-sm animate-pulse">
                    Happy Valentine's Day Crystabel, from Isaac. I hope you like my gift
                  </h2>
                </section>
              </motion.div>
            )}
          </motion.div>
        )}

      </main>

      <footer className="relative z-10 text-center py-8 text-pink-700/60 text-sm">
        <p>Made with ❤️ for you</p>
      </footer>
    </div>
  );
}

export default App;
