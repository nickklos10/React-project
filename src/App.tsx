import React, { useState } from 'react'
import FaultyTerminal from './components/FaultyTerminal'

function App() {
  const [isConnected, setIsConnected] = useState(false)

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Terminal Background */}
      <div className="absolute inset-0">
        <FaultyTerminal 
          tint="#00ff41" 
          brightness={0.8}
          scale={2}
          gridMul={[3, 2]}
          glitchAmount={1.2}
          scanlineIntensity={0.4}
          mouseReact={true}
          mouseStrength={0.3}
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col pointer-events-none">
        {/* Header */}
        <header className="flex justify-between items-center p-6 bg-black/20 backdrop-blur-sm border-b border-green-500/20 pointer-events-auto">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-mono text-sm">SYSTEM_ONLINE</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-green-400 hover:text-green-300 transition-colors font-mono text-sm">INIT</a>
            <a href="#" className="text-green-400 hover:text-green-300 transition-colors font-mono text-sm">EXEC</a>
            <a href="#" className="text-green-400 hover:text-green-300 transition-colors font-mono text-sm">TERM</a>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center p-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-mono font-bold text-green-400 mb-4 drop-shadow-lg">
                CYBER<span className="text-green-300">TERM</span>
              </h1>
              <p className="text-green-300/80 font-mono text-lg mb-2">
                &gt; NEURAL_INTERFACE_v2.1.4
              </p>
              <p className="text-green-400/60 font-mono text-sm">
                React + TypeScript + WebGL Terminal
              </p>
            </div>

            <div className="bg-black/40 border border-green-500/30 rounded-lg p-6 backdrop-blur-sm pointer-events-auto">
              <div className="flex items-center justify-between mb-4">
                <span className="text-green-400 font-mono text-sm">CONNECTION_STATUS:</span>
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-400' : 'bg-red-500'} animate-pulse`}></div>
                  <span className="text-green-400 font-mono text-sm">
                    {isConnected ? 'CONNECTED' : 'DISCONNECTED'}
                  </span>
                </div>
              </div>
              
              <button
                onClick={() => setIsConnected(!isConnected)}
                className="w-full bg-green-500/20 hover:bg-green-500/30 border border-green-500 text-green-400 font-mono py-3 px-6 rounded transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500/50"
              >
                {isConnected ? '&gt; DISCONNECT_NEURAL_LINK' : '&gt; ESTABLISH_CONNECTION'}
              </button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-green-400/60 font-mono text-xs">
                Move your cursor around to interact with the terminal matrix
              </p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-6 bg-black/20 backdrop-blur-sm border-t border-green-500/20 pointer-events-auto">
          <div className="flex justify-between items-center text-green-400/60 font-mono text-xs">
            <span>&copy; 2024 CYBERTERM_LABS</span>
            <span>UPTIME: {new Date().toLocaleTimeString()}</span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
