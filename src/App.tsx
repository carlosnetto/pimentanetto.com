import { motion } from 'motion/react';
import { Globe } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden selection:bg-solana-purple/30 selection:text-solana-green">
      {/* Subtle background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-solana-purple/20 rounded-full mix-blend-screen filter blur-[128px] opacity-50 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-solana-green/10 rounded-full mix-blend-screen filter blur-[128px] opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-solana-blue/5 rounded-full mix-blend-screen filter blur-[128px]" />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 sm:px-12 lg:px-24 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl w-full text-center space-y-12"
        >
          {/* Logo / Brand */}
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter"
            >
              Pimenta Netto
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-solana-purple via-solana-blue to-solana-green">
                International Investments
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="font-mono text-sm sm:text-base text-zinc-500 tracking-widest uppercase"
            >
              pimentanetto.com
            </motion.p>
          </div>

          {/* Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
              We are an investment company focusing on corporate bonds, treasury bonds, equities, and digital assets, primarily across North American markets.
            </p>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="w-full py-8 px-6 z-10 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-zinc-600 font-mono">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-solana-green/70" />
            <span>Proudly a BVI Incorporated corporation.</span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} Pimenta Netto International Investments.
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
