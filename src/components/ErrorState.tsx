import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorStateProps {
  error: string;
  onRetry: () => void;
}

export default function ErrorState({ error, onRetry }: ErrorStateProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/20 p-12 transition-colors duration-300">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="bg-red-100 dark:bg-red-900/30 rounded-full p-4">
              <AlertCircle className="h-12 w-12 text-red-600 dark:text-red-400" />
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Something went wrong
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
              {error}
            </p>
          </div>
          
          <button
            onClick={onRetry}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Try Again
          </button>
          
          <div className="pt-4 text-sm text-gray-500 dark:text-gray-400 space-y-1">
            <p>Common issues:</p>
            <ul className="list-disc list-inside space-y-1 text-left max-w-md mx-auto">
              <li>Playlist is private or doesn't exist</li>
              <li>Invalid playlist URL format</li>
              <li>Network connection issues</li>
              <li>API rate limit exceeded</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}