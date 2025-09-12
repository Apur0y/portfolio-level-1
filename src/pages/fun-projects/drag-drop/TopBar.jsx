import React from 'react'

export default function TopBar() {
  return (
    <div>
           <div className="h-14 bg-gray-800 border-b border-gray-700 flex items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 bg-pink-900 text-white rounded text-sm">+ Create</button>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <span>Team Space</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Project 2</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Cmd + K"
                className="bg-gray-700 text-white placeholder-gray-400 px-3 py-1 rounded text-sm w-64"
              />
            </div>
            <div className="w-8 h-8 bg-pink-900 rounded-full flex items-center justify-center text-sm font-bold">
              AR
            </div>
          </div>
        </div>
    </div>
  )
}