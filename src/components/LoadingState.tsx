import React from 'react';
import { Loader2, Youtube } from 'lucide-react';

export default function LoadingState() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/20 p-12 transition-colors duration-300">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="relative">
              <Youtube className="h-16 w-16 text-primary-600 dark:text-primary-400 animate-pulse" />
              <Loader2 className="h-8 w-8 text-secondary-600 dark:text-secondary-400 animate-spin absolute -top-2 -right-2" />
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Analyzing Your Playlist
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Fetching video details and calculating total duration...
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-500 dark:to-secondary-500 h-2 rounded-full animate-pulse w-3/4"></div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This may take a moment for large playlists
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}