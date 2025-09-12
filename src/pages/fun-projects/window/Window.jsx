
import React, { useState, useRef, useCallback, useEffect } from 'react';

// Interface for each window's position and state interface Window { id: number; x: number; y: number; width: number; height: number; color: string; }

const MultipleWindowDraggingComponent = () => { const [windows, setWindows] = useState([ { id: 1, x: 100, y: 100, width: 300, height: 200, color: 'lightblue' }, { id: 2, x: 500, y: 100, width: 300, height: 200, color: 'lightgreen' }, { id: 3, x: 100, y: 400, width: 300, height: 200, color: 'lightcoral' }, { id: 4, x: 500, y: 400, width: 300, height: 200, color: 'lightyellow' }, ]); const [isDragging, setIsDragging] = useState(false); const [draggingWindowId, setDraggingWindowId] = useState(null); const [showSnapIndicator, setShowSnapIndicator] = useState(false); const [snapPosition, setSnapPosition] = useState(null); const dragState = useRef({ offsetX: 0, offsetY: 0 }); const [node, setNode] = useState(5)

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// Handle mouse down (start dragging)
const handleMouseDown = useCallback(
    (e, windowId) => {
        const window = windows.find((win) => win.id === windowId);
        if (window) {
            setIsDragging(true);
            setDraggingWindowId(windowId);
            dragState.current = {
                offsetX: e.clientX - window.x,
                offsetY: e.clientY - window.y,
            };
        }
    },
    [windows]
);

// Handle mouse move (while dragging)
const handleMouseMove = useCallback(
    (e) => {
        if (!isDragging || draggingWindowId === null) return;

        let newX = e.clientX - dragState.current.offsetX;
        let newY = e.clientY - dragState.current.offsetY;

        // Snap detection logic (30px from each edge)
        let snapDetected= null;

        if (newX <= 30) snapDetected = 'left'; // Snap to left side
        else if (newX >= screenWidth - 30) snapDetected = 'right'; // Snap to right side
        else if (newY <= 30) snapDetected = 'top'; // Snap to top side
        else if (newY >= screenHeight - 30) snapDetected = 'bottom'; // Snap to bottom side

        setSnapPosition(snapDetected);
        setShowSnapIndicator(!!snapDetected);

        // Constrain the window position to prevent overflow
        // Prevent the window from going outside the screen width
        newX = Math.max(0, Math.min(newX, screenWidth - 300)); // 300 is the window width
        // Prevent the window from going outside the screen height
        newY = Math.max(0, Math.min(newY, screenHeight - 200)); // 200 is the window height

        // Update window position and size based on snap detection
        setWindows((prevWindows) =>
            prevWindows.map((window) =>
                window.id === draggingWindowId
                    ? {
                        ...window,

                        x: newX,
                        y: newY,
                        width:
                            snapDetected === 'top' || snapDetected === 'bottom'
                                ? screenWidth // Keep the width if snapped to top/bottom
                                : snapDetected === 'right' || snapDetected === 'left'
                                    ? screenWidth / 2 // Keep the width if snapped to top/bottom
                                    :300, // Set width to half the screen width if snapped to left/right
                        height:
                            snapDetected === 'left' || snapDetected === 'right'
                                ? screenHeight // Keep the height if snapped to left/right
                                : snapDetected === 'top' || snapDetected === 'bottom'
                                    ? screenHeight / 2 // Keep the height if snapped to left/right
                                    : 200, // Set height to half the screen height if snapped to top/bottom
                    }
                    : window
            )
        );
    },
    [isDragging, draggingWindowId, windows]
);

// Handle mouse up (end dragging)
const handleMouseUp = useCallback((e) => {


    let newX = e.clientX - dragState.current.offsetX;
    let newY = e.clientY - dragState.current.offsetY;
    let snapDetected= null;

    if (newX <= 30) snapDetected = 'left'; // Snap to left side
    else if (newX >= screenWidth - 30) snapDetected = 'right'; // Snap to right side
    else if (newY <= 30) snapDetected = 'top'; // Snap to top side
    else if (newY >= screenHeight - 30) snapDetected = 'bottom';
    setIsDragging(false);
    setShowSnapIndicator(false);
    setSnapPosition(null);
    setWindows((prevWindows) =>
        prevWindows.map((window) =>
            window.id === draggingWindowId
                ? {
                    ...window,

                    x:
                        snapDetected === 'left'
                            ? 0 // Snap to the left corner
                            : snapDetected === 'top'
                                ? 0 // Snap to the left corner
                                : snapDetected === 'right'
                                    ? screenWidth - window.width // Snap to the right corner
                                    : window.x, // Keep original position if not snapped
                    y:
                        snapDetected === 'left'
                            ? 0
                            : snapDetected === 'top'
                                ? 0
                                : snapDetected === 'bottom'
                                    ? screenHeight - window.height // Snap to the bottom corner
                                    : window.y,
                }
                : window
        )
    );
}, [isDragging, draggingWindowId, windows]);


const handleDelete = (id) => {
    setWindows((prevWindows) => prevWindows.filter((window) => window.id !== id));
};


// Attach event listeners when dragging starts
useEffect(() => {
    if (isDragging) {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    } else {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
    }

    // Cleanup on component unmount
    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
    };
}, [isDragging]);

const addNewWindow = () => {

    const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightyellow', 'lightpink', 'lightgray'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const newWindow = {
        id: node, // Generate a unique ID using the current timestamp
        x: Math.random() * (screenWidth - 300), // Random x position within screen bounds
        y: Math.random() * (screenHeight - 200), // Random y position within screen bounds
        width: 300,
        height: 200,
        color: randomColor, // Random color
    };
    setWindows((prevWindows) => [...prevWindows, newWindow]);
    setNode(prev=>prev+1);
};


return (
    <div className="w-full h-screen bg-gray-100 relative overflow-hidden">
        {/* Snap indicator */}
        {showSnapIndicator && (
            <div
                className={`absolute top-0 left-0  bg-gray-400  ${snapPosition === 'left' || snapPosition === 'right' ? 'w-[30px]' : 'w-full'
                    } ${snapPosition === 'top' || snapPosition === 'bottom' ? 'h-[30px]' : 'h-full'
                    } `}
                style={{

                }}
            />
        )}

        {/* Render windows */}
        {windows.map((window) => (
            <div
                key={window.id}
                onMouseDown={(e) => handleMouseDown(e, window.id)}
                style={{
                    position: 'absolute',
                    left: `${window.x}px`,
                    top: `${window.y}px`,
                    width: `${window.width}px`,
                    height: `${window.height}px`,
                    backgroundColor: `${window.color}`,
                    border: '2px solid #000',
                    borderRadius: '10px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    cursor: isDragging ? 'grabbing' : 'grab',
                    zIndex: window.id === draggingWindowId ? 999 : 1,
                }}

            >
                <h2 className="text-center bg-gray-700 flex justify-end"><button onClick={() => handleDelete(window.id)} className='text-end bg-red-600 p-3 inline-block cursor-pointer'>X</button></h2>
                <p className="p-2">Node:  {window.id}</p>
            </div>
        ))}

        {/* Plus button to add a new window */}
        <button
            onClick={() => addNewWindow()}
            className="fixed bottom-5 right-5 p-4 bg-blue-500 text-white rounded-full shadow-lg"
            style={{
                fontSize: '24px',
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            +
        </button>
    </div>
);
};

export default MultipleWindowDraggingComponent;