import React, { useState } from 'react'
import Navbar from '../pages/Shared/Navbar/Navbar'
import PillSplitter from '../pages/Pill/PillSpitter';

export default function FunLayout() {
      const [activeSection, setActiveSection] = useState("home");
  return (
    <div className='flex'>
              {/* Navigation with Active Section */}
              <div>
                <div className="z-50 w-full fixed md:w-64">
                  <Navbar activeSection={activeSection} />
                </div>
              </div>

<div className='flex-1 md:ml-72'>

              <PillSplitter/>
</div>
    </div>
  )
}
