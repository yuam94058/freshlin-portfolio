import { useState } from 'react';
import { Home } from './components/Home';
import { About } from './components/About';
import { Resume } from './components/Resume';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'resume'>('home');

  return (
    <div className="min-h-screen bg-background">
      {/* Tab Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Tabs */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setActiveTab('home')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'home'
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="hidden sm:inline">林欣萱 Fresh Lin</span>
                <span className="sm:hidden">主頁</span>
              </button>
              <button
                onClick={() => setActiveTab('about')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'about'
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>About</span>
              </button>
              <button
                onClick={() => setActiveTab('resume')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'resume'
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Resume</span>
              </button>
            </div>

            {/* Right Side Text */}
            <div className="hidden lg:flex items-center gap-2 text-xs text-muted-foreground">
              <span className="px-3 py-1 bg-muted text-foreground rounded-full font-medium">Open to Opportunities</span>
              <span>｜</span>
              <span>yuam94058@gmail.com</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Content Sections */}
      <main className="transition-opacity duration-300">
        {activeTab === 'home' && <Home />}
        {activeTab === 'about' && <About />}
        {activeTab === 'resume' && <Resume />}
      </main>
    </div>
  );
}