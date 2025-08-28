'use client'

import { useState, useRef, useCallback, useEffect } from 'react'



const COLORS = [
  '#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16',
  '#22c55e', '#10b981', '#14b8a6', '#06b6d4', '#0ea5e9',
  '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#d946ef',
  '#ec4899', '#f43f5e'
]

const MIN_PILL_SIZE = 40
// const MIN_PART_SIZE = 20
const BORDER_RADIUS = 20

export default function PillSplitter() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [pills, setPills] = useState([])
  const [dragState, setDragState] = useState({
    isDragging: false,
    dragType: 'draw',
    startX: 0,
    startY: 0,
    offsetX: 0,
    offsetY: 0
  })
const [isMoved, setIsMoved] = useState(false)
const [startX, setStartX] = useState(0)
const [startY, setStartY] = useState(0)


  const containerRef = useRef(null)
  const pillIdRef = useRef(0);

  const getRandomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)]

  const generateId = () => pillIdRef.current++

  // Track mouse position for split lines
  useEffect(() => {
    const handleMouseMove = (e) => {
      console.log("Move Use effect");
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleMouseDown = useCallback((e) => {
     setStartX(e.clientX)
  setStartY(e.clientY)
  setIsMoved(false) 

    if (e.button !== 0) return // Only handle left click
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Check if clicking on an existing pill
    const clickedPill = pills.find(pill => 
      x >= pill.x && x <= pill.x + pill.width &&
      y >= pill.y && y <= pill.y + pill.height
    )

    if (clickedPill) {
      // Start moving the pill
      setDragState({
        isDragging: true,
        dragType: 'move',
        pillId: clickedPill.id,
        startX: x,
        startY: y,
        offsetX: x - clickedPill.x,
        offsetY: y - clickedPill.y
      })
    } else {
      // Start drawing a new pill
      setDragState({
        isDragging: true,
        dragType: 'draw',
        startX: x,
        startY: y,
        offsetX: 0,
        offsetY: 0
      })
    }
  }, [pills])

const handleMouseMove = useCallback((e) => {
    

  const deltaX = Math.abs(e.clientX - startX)
  const deltaY = Math.abs(e.clientY - startY)

  // If mouse moved more than a threshold (e.g., 5px), consider it a drag
  if (deltaX > 5 || deltaY > 5) {
    setIsMoved(true)
    console.log(deltaX,deltaY);
  }

  if (!dragState.isDragging) return;
  
  const rect = containerRef.current?.getBoundingClientRect();
  if (!rect) return;

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  if (dragState.dragType === 'move' && dragState.pillId) {
    // Move existing pill
    setPills((prev) =>
      prev.map((pill) =>
        pill.id === dragState.pillId
          ? { ...pill, x: x - dragState.offsetX, y: y - dragState.offsetY }
          : pill
      )
    );
  } else if (dragState.dragType === 'draw') {
    // Update drawing pill
    const width = Math.abs(x - dragState.startX);
    const height = Math.abs(y - dragState.startY);
    const pillX = Math.min(x, dragState.startX);
    const pillY = Math.min(y, dragState.startY);

    if (width >= MIN_PILL_SIZE && height >= MIN_PILL_SIZE) {
      const tempPillId = -1;
      setPills((prev) => {
        const filtered = prev.filter((p) => p.id !== tempPillId);
        return [
          ...filtered,
          {
            id: tempPillId,
            x: pillX,
            y: pillY,
            width,
            height,
            color: getRandomColor(),
            topLeftRadius: BORDER_RADIUS,
            topRightRadius: BORDER_RADIUS,
            bottomLeftRadius: BORDER_RADIUS,
            bottomRightRadius: BORDER_RADIUS,
          },
        ];
      });
    }
  }
}, [dragState]);



 const handleMouseUp = useCallback(() => {

  if (dragState.isDragging && dragState.dragType === 'draw') {
    // Finalize the drawn pill (if any)
    setPills((prev) =>
      prev.map((pill) =>
        pill.id === -1
          ? { ...pill, id: generateId() }
          : pill
      )
    );
  }

  // After dragging, prevent split behavior
  setDragState({
    ...dragState,
    isDragging: false, // Stop the dragging state
  });
}, [dragState]);


  const splitPill = (pill, splitX, splitY) => {
    const parts = [];
    const minSize = 20;
        
    // Calculate relative split positions
    const relativeX = splitX - pill.x;
    const relativeY = splitY - pill.y;
        

    const canSplitVertically = relativeX >= minSize && (pill.width - relativeX) >= minSize;
    const canSplitHorizontally = relativeY >= minSize && (pill.height - relativeY) >= minSize;
        
    if (!canSplitVertically && !canSplitHorizontally) {
      return [pill]; 
    }
        
    if (canSplitVertically && canSplitHorizontally) {
     
      const topLeft = {
        x: pill.x,
        y: pill.y,
        width: relativeX,
        height: relativeY,
        topLeftRadius: pill.topLeftRadius,
        topRightRadius: 0,
        bottomLeftRadius: 0,
        bottomRightRadius: 0
      };
            
      const topRight = {
        x: pill.x + relativeX,
        y: pill.y,
        width: pill.width - relativeX,
        height: relativeY,
        topLeftRadius: 0,
        topRightRadius: pill.topRightRadius,
        bottomLeftRadius: 0,
        bottomRightRadius: 0
      };
            
      const bottomLeft = {
        x: pill.x,
        y: pill.y + relativeY,
        width: relativeX,
        height: pill.height - relativeY,
        topLeftRadius: 0,
        topRightRadius: 0,
        bottomLeftRadius: pill.bottomLeftRadius,
        bottomRightRadius: 0
      };
            
      const bottomRight = {
        x: pill.x + relativeX,
        y: pill.y + relativeY,
        width: pill.width - relativeX,
        height: pill.height - relativeY,
        topLeftRadius: 0,
        topRightRadius: 0,
        bottomLeftRadius: 0,
        bottomRightRadius: pill.bottomRightRadius
      };
            
      [topLeft, topRight, bottomLeft, bottomRight].forEach(part => {
        parts.push({
          id: pillIdRef.current++,
          x: part.x,
          y: part.y,
          width: part.width,
          height: part.height,
          color: pill.color,
          topLeftRadius: part.topLeftRadius,
          topRightRadius: part.topRightRadius,
          bottomLeftRadius: part.bottomLeftRadius,
          bottomRightRadius: part.bottomRightRadius
        });
      });
    } else if (canSplitVertically) {
      // Split vertically only
      const leftPart = {
        x: pill.x,
        y: pill.y,
        width: relativeX,
        height: pill.height,
        topLeftRadius: pill.topLeftRadius,
        topRightRadius: 0,
        bottomLeftRadius: pill.bottomLeftRadius,
        bottomRightRadius: 0
      };
            
      const rightPart = {
        x: pill.x + relativeX,
        y: pill.y,
        width: pill.width - relativeX,
        height: pill.height,
        topLeftRadius: 0,
        topRightRadius: pill.topRightRadius,
        bottomLeftRadius: 0,
        bottomRightRadius: pill.bottomRightRadius
      };
            
      [leftPart, rightPart].forEach(part => {
        parts.push({
          id: pillIdRef.current++,
          x: part.x,
          y: part.y,
          width: part.width,
          height: part.height,
          color: pill.color,
          topLeftRadius: part.topLeftRadius,
          topRightRadius: part.topRightRadius,
          bottomLeftRadius: part.bottomLeftRadius,
          bottomRightRadius: part.bottomRightRadius
        });
      });
    } else if (canSplitHorizontally) {
      // Split horizontally only
      const topPart = {
        x: pill.x,
        y: pill.y,
        width: pill.width,
        height: relativeY,
        topLeftRadius: pill.topLeftRadius,
        topRightRadius: pill.topRightRadius,
        bottomLeftRadius: 0,
        bottomRightRadius: 0
      };
            
      const bottomPart = {
        x: pill.x,
        y: pill.y + relativeY,
        width: pill.width,
        height: pill.height - relativeY,
        topLeftRadius: 0,
        topRightRadius: 0,
        bottomLeftRadius: pill.bottomLeftRadius,
        bottomRightRadius: pill.bottomRightRadius
      };
            
      [topPart, bottomPart].forEach(part => {
        parts.push({
          id: pillIdRef.current++,
          x: part.x,
          y: part.y,
          width: part.width,
          height: part.height,
          color: pill.color,
          topLeftRadius: part.topLeftRadius,
          topRightRadius: part.topRightRadius,
          bottomLeftRadius: part.bottomLeftRadius,
          bottomRightRadius: part.bottomRightRadius
        });
      });
    }
        
    return parts.length > 0 ? parts : [pill];
  };

const handleClick = useCallback(
  (e) => {
    if(isMoved) return
    if (dragState.isDragging) return;

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Split pills that intersect with the split lines
    setPills((prev) => {
      const newPills= [];

      prev.forEach((pill) => {
        const intersectsVertical = clickX >= pill.x && clickX <= pill.x + pill.width;
        const intersectsHorizontal = clickY >= pill.y && clickY <= pill.y + pill.height;

        if (intersectsVertical || intersectsHorizontal) {
          // Split the pill
          newPills.push(...splitPill(pill, clickX, clickY));
        } else {
          // No intersection, keep the pill
          newPills.push(pill);
        }
      });

      return newPills;
    });
  },
  [dragState.isDragging]
);



  return (
    <div className="w-full h-screen bg-gray-800 relative overflow-hidden">
      <div
        ref={containerRef}
        className="w-full h-full relative cursor-crosshair"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onClick={handleClick}
      >
        {/* Split lines */}
        <div
          className="absolute bg-red-500 opacity-50 pointer-events-none z-10"
          style={{
            left: mousePos.x,
            top: 0,
            width: '2px',
            height: '100%'
          }}
        />
        <div
          className="absolute bg-red-500 opacity-50 pointer-events-none z-10"
          style={{
            left: 0,
            top: mousePos.y,
            width: '100%',
            height: '2px'
          }}
        />

        {/* Pills */}
        {pills.map(pill => (
          <div
            key={pill.id}
            className={`absolute border-2 border-gray-840 cursor-move `}
            style={{
              left: pill.x,
              top: pill.y,
              width: pill.width,
              height: pill.height,
              backgroundColor: pill.color,
              borderTopLeftRadius: pill.topLeftRadius,
              borderTopRightRadius: pill.topRightRadius,
              borderBottomLeftRadius: pill.bottomLeftRadius,
              borderBottomRightRadius: pill.bottomRightRadius
            }}
          />
        ))}

        {/* Instructions */}
        <div className="absolute top-4 left-4 bg-white text-black p-4 rounded-lg shadow-lg max-w-md">
          <h2 className="font-bold text-lg mb-2">Pill Splitter</h2>
          <ul className="text-sm space-y-1">
            <li>• Click and drag on empty space to draw pills</li>
            <li>• Single click to split pills along the red lines</li>
            <li>• Drag existing pills to move them</li>
            <li>• Red lines follow your cursor</li>
          </ul>
        </div>
      </div>
    </div>
  )
}