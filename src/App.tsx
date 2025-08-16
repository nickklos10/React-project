import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex items-center justify-center mb-6">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-75"></div>
              <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse delay-150"></div>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
            React + TypeScript + Tailwind
          </h1>
          
          <p className="text-gray-600 text-center mb-8">
            Your modern development stack is ready!
          </p>
          
          <div className="text-center">
            <button
              onClick={() => setCount((count) => count + 1)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              Count is {count}
            </button>
            
            <div className="mt-6 text-sm text-gray-500">
              <p>Edit <code className="bg-gray-100 px-2 py-1 rounded text-xs">src/App.tsx</code> and save to test HMR</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
