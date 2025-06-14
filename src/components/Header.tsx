import React from 'react';
import { Youtube, Calculator } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 dark:from-primary-800 dark:via-secondary-800 dark:to-accent-800 animate-gradient"></div>
      <div className="relative backdrop-blur-sm bg-white/10 dark:bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex justify-center items-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 dark:bg-white/10 rounded-full blur-xl animate-pulse-slow"></div>
                <div className="relative bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/30 dark:border-white/20">
                  <Youtube className="h-12 w-12 text-white" />
                </div>
              </div>
              <Calculator className="h-8 w-8 text-white/80 ml-4 animate-float" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              YouTube Playlist
              <span className="block bg-gradient-to-r from-accent-300 to-primary-300 dark:from-accent-200 dark:to-primary-200 bg-clip-text text-transparent">
                Calculator
              </span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Calculate the total duration of any YouTube playlist instantly. 
              Get detailed insights and export your results.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}