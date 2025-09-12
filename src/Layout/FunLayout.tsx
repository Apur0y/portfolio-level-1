import React, { useState } from "react";
import PillSplitter from "../pages/fun-projects/Pill/PillSpitter";
import FunNavbar from "../pages/Shared/Navbar/FunNavbar";
import MultipleWindowDraggingComponent from "../pages/fun-projects/window/Window";
import DragAndDrop from "../pages/fun-projects/drag-drop/DragAndDrop";

export default function FunLayout() {
  const [activeSection, setActiveSection] = useState("pill");
 
  console.log(activeSection);
  return (
    <div className="flex">    
    
        <div className="z-50 w-full fixed md:w-64">
          <FunNavbar setActiveSection={setActiveSection} activeSection={activeSection} />
        </div>
   

      <div className="flex-1 md:ml-72">
        {activeSection==="pill" &&  <PillSplitter />}
        {activeSection==="dnd" &&  <DragAndDrop />}
        {activeSection==="window" &&  <MultipleWindowDraggingComponent />}
       
      </div>
    </div>
  );
}
