import { createRoot } from 'react-dom/client';
import { Sparkles, Power, Settings } from 'lucide-react';
import '../index.css';

const App = () => {
  return (
    <div className="bg-white min-h-screen p-4 text-slate-800 font-sans selection:bg-indigo-100">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-indigo-600 rounded-lg shadow-md shadow-indigo-200">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
            Aura Spark
          </h1>
        </div>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Status Card */}
      <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 mb-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-indigo-500 uppercase tracking-wider mb-1">Status</p>
            <p className="text-sm font-medium text-indigo-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Active & Watching
            </p>
          </div>
          <button className="bg-white p-2 rounded-xl shadow-sm border border-indigo-100 text-indigo-600 hover:text-indigo-700 hover:scale-105 transition-all">
            <Power className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Stats / Info */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
          <p className="text-2xl font-bold text-slate-700">0</p>
          <p className="text-[10px] text-slate-400 font-medium uppercase">Words Defined</p>
        </div>
        <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
          <p className="text-2xl font-bold text-slate-700">Llama</p>
          <p className="text-[10px] text-slate-400 font-medium uppercase">AI Model</p>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center pt-2 border-t border-slate-100">
        <p className="text-xs text-slate-400">
          Select text on any webpage to see the magic.
        </p>
      </div>
      
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}