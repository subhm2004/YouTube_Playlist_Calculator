import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import PlaylistInput from './components/PlaylistInput';
import PlaylistResults from './components/PlaylistResults';
import LoadingState from './components/LoadingState';
import ErrorState from './components/ErrorState';
import ThemeToggle from './components/ThemeToggle';
import { YouTubePlaylist } from './types/youtube';
import { extractPlaylistId, fetchPlaylistInfo } from './services/youtube';

function AppContent() {
  const [playlist, setPlaylist] = useState<YouTubePlaylist | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentUrl, setCurrentUrl] = useState('');

  const handlePlaylistSubmit = async (url: string) => {
    const playlistId = extractPlaylistId(url);
    
    if (!playlistId) {
      setError('Invalid YouTube playlist URL. Please make sure the URL contains a playlist ID.');
      return;
    }

    setLoading(true);
    setError(null);
    setPlaylist(null);
    setCurrentUrl(url);

    try {
      const playlistData = await fetchPlaylistInfo(playlistId);
      setPlaylist(playlistData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    if (currentUrl) {
      handlePlaylistSubmit(currentUrl);
    }
  };

  const resetApp = () => {
    setPlaylist(null);
    setError(null);
    setCurrentUrl('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 transition-colors duration-300">
      <ThemeToggle />
      <Header />
      
      <main className="pb-12">
        {!playlist && !loading && !error && (
          <PlaylistInput onSubmit={handlePlaylistSubmit} loading={loading} />
        )}
        
        {loading && <LoadingState />}
        
        {error && (
          <ErrorState error={error} onRetry={handleRetry} />
        )}
        
        {playlist && (
          <>
            <PlaylistResults playlist={playlist} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
              <div className="text-center">
                <button
                  onClick={resetApp}
                  className="inline-flex items-center px-6 py-3 bg-white/80 dark:bg-gray-800/80 hover:bg-white/90 dark:hover:bg-gray-700/90 backdrop-blur-sm text-gray-700 dark:text-gray-200 font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg border border-white/20 dark:border-gray-700/20"
                >
                  Analyze Another Playlist
                </button>
              </div>
            </div>
          </>
        )}
      </main>
      
      <footer className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-t border-white/20 dark:border-gray-700/20 py-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600 dark:text-gray-300">
            <p className="text-sm">
              Made with ❤️ by <span className="font-semibold text-primary-600 dark:text-primary-400">Shubham Malik</span>
            </p>
            <p className="text-xs mt-2 opacity-75">
              Calculate playlist durations • Export data • Analyze statistics • Custom speed calculations
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;