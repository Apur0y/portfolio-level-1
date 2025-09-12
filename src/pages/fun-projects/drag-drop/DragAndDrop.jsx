
import  { useState } from 'react'
import TopBar from './TopBar'
import TaskManagement from './TaskManager'

export default function DragAndDrop() {
      const [activeTab, setActiveTab] = useState("List")
    
      const tabs = ["List"]
    
  return (
    <div className='bg-gradient-to-br from-neutral-900 via-neutral-950 to-[#3F101F]'>
         <div className="flex-1 flex flex-col min-h-screen ">
        {/* Top Header */}
          <TopBar/>

        {/* Project Header */}
        <div className=" border-b border-gray-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold">Project 2</h1>
              <div className="flex space-x-1">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 text-sm rounded ${
                      activeTab === tab ? "bg-pink-900 text-white" : "text-gray-400 hover:text-white hover:bg-gray-700"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 bg-pink-900 text-white rounded text-sm">Add Task</button>
            </div>
          </div>
        </div>

        {/* Task List */}
       <TaskManagement/>
      </div>
    </div>
  )
}