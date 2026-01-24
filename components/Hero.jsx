import { ArrowRight, Eye } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-20 md:pt-32 pb-24 md:pb-32 bg-dark-charcoal">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/hero-bg.png"
          alt="Abstract Code Visualization"
          fill
          className="object-cover"
          priority
          placeholder="empty"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-white dark:to-dark-charcoal"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-yellow-400/10 text-minion-yellow px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase animate-slide-in border border-minion-yellow/20">
            <Eye size={16} />
            <span>Visualize The Logic</span>
          </div>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white max-w-5xl animate-slide-in drop-shadow-sm"
            style={{ animationDelay: '0.1s' }}>
            JavaScript, <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-minion-yellow to-yellow-500">
              Reimagined.
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl animate-slide-in font-light leading-relaxed drop-shadow-sm"
            style={{ animationDelay: '0.2s' }}>
            Don&apos;t just read code. <strong>See how it runs.</strong> <br />
            Detailed visual explanations for every complex concept.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-in pt-4"
            style={{ animationDelay: '0.3s' }}>
            <Link
              href="#visual-concepts"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-minion-yellow hover:bg-yellow-400 text-dark-charcoal font-bold py-4 px-8 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(240,219,79,0.3)]">
              <span>Start Visualizing</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              href="https://github.com/prasenjitpriyan/javascript"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-medium py-4 px-8 rounded-full transition-colors backdrop-blur-sm border border-white/10">
              <span>View on GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
