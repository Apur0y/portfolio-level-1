import React, { useState, useCallback, useRef, useEffect } from "react";

const initialTasks = [
  { id: 1, title: "Task 1", status: "TO DO" },
  { id: 2, title: "Task 2", status: "IN PROGRESS" },
  { id: 3, title: "Task 3", status: "TO DO" },
  { id: 4, title: "Task 4", status: "DONE" },
  { id: 5, title: "Task 5", status: "IN PROGRESS" },
];

const sections = [
  { name: "TO DO", color: "bg-gray-500", textColor: "text-gray-300" },
  { name: "IN PROGRESS", color: "bg-blue-500", textColor: "text-blue-400" },
  { name: "DONE", color: "bg-green-500", textColor: "text-green-400" }
];

export default function TaskManagement() {
  const [allTasks, setAllTasks] = useState(initialTasks);
  const [dragState, setDragState] = useState({
    isDragging: false,
    dragTask: null,
    dragOffset: { x: 0, y: 0 },
    mousePosition: { x: 0, y: 0 },
    dropTarget: { section: "", index: -1 },
  });

  const sectionRefs = useRef({});

  const handleMouseDown = useCallback((e, task) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    setDragState({
      isDragging: true,
      dragTask: task,
      dragOffset: { x: offsetX, y: offsetY },
      mousePosition: { x: e.clientX, y: e.clientY },
      dropTarget: { section: "", index: -1 },
    });

    e.preventDefault();
    e.stopPropagation();
  }, []);

  const getDropIndex = useCallback((mouseY, sectionName) => {
    const sectionRef = sectionRefs.current[sectionName];
    if (!sectionRef) return -1;

    const sectionRect = sectionRef.getBoundingClientRect();
    const relativeY = mouseY - sectionRect.top;
    const headerHeight = 80; // Section header + task header height
    const taskHeight = 60; // Task row height
    const taskSpacing = 4; // Gap between tasks

    if (relativeY < headerHeight) return 0;

    const adjustedY = relativeY - headerHeight;
    const taskIndex = Math.floor(adjustedY / (taskHeight + taskSpacing));
    const positionInTask = adjustedY % (taskHeight + taskSpacing);
    const insertIndex = positionInTask > taskHeight / 2 ? taskIndex + 1 : taskIndex;

    const sectionTasks = allTasks.filter(t => t.status === sectionName);
    return Math.min(Math.max(0, insertIndex), sectionTasks.length);
  }, [allTasks]);

  const getDropTarget = useCallback((clientX, clientY) => {
    for (const section of sections) {
      const ref = sectionRefs.current[section.name];
      const bounds = ref?.getBoundingClientRect();
      if (!bounds) continue;

      const isInSection =
        clientX >= bounds.left &&
        clientX <= bounds.right &&
        clientY >= bounds.top &&
        clientY <= bounds.bottom;

      if (isInSection) {
        return {
          section: section.name,
          index: getDropIndex(clientY, section.name),
        };
      }
    }
    return { section: "", index: -1 };
  }, [getDropIndex]);

  const handleMouseMove = useCallback((e) => {
    if (!dragState.isDragging || !dragState.dragTask) return;

    const dropTarget = getDropTarget(e.clientX, e.clientY);

    setDragState(prev => ({
      ...prev,
      mousePosition: { x: e.clientX, y: e.clientY },
      dropTarget,
    }));
  }, [dragState.isDragging, dragState.dragTask, getDropTarget]);

  const moveTask = useCallback((task, targetStatus, targetIndex) => {
    setAllTasks(prev => {
      const otherTasks = prev.filter(t => t.id !== task.id);
      const targetStatusTasks = otherTasks.filter(t => t.status === targetStatus);
      const nonTargetTasks = otherTasks.filter(t => t.status !== targetStatus);

      const updatedTask = { ...task, status: targetStatus };
      targetStatusTasks.splice(targetIndex, 0, updatedTask);

      return [...nonTargetTasks, ...targetStatusTasks];
    });
  }, []);

  const handleMouseUp = useCallback(() => {
    if (!dragState.isDragging || !dragState.dragTask) return;

    const { dropTarget, dragTask } = dragState;

    if (dropTarget.section && dropTarget.index >= 0) {
      moveTask(dragTask, dropTarget.section, dropTarget.index);
    }

    setDragState({
      isDragging: false,
      dragTask: null,
      dragOffset: { x: 0, y: 0 },
      mousePosition: { x: 0, y: 0 },
      dropTarget: { section: "", index: -1 },
    });
  }, [dragState, moveTask]);

  useEffect(() => {
    if (dragState.isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [dragState.isDragging, handleMouseMove, handleMouseUp]);

  const getStatusColor = (status) => {
    const section = sections.find(s => s.name === status);
    return section ? section.color : "bg-gray-500";
  };

  const renderSection = (section) => {
    const sectionTasks = allTasks.filter(t => t.status === section.name);

    return (
      <div
        key={section.name}
        className="mb-8"
        ref={el => sectionRefs.current[section.name] = el}
      >
        {/* Section Header */}
        <div className="flex items-center space-x-2 mb-4">
          <div className={`w-3 h-3 ${section.color} rounded-full`}></div>
          <span className={`font-medium ${section.textColor}`}>
            {section.name}
          </span>
          <span className="text-gray-500 text-sm">
            {sectionTasks.length}
          </span>
          <button className="text-gray-500 hover:text-white text-sm">
            + Add Task
          </button>
        </div>

        {/* Task Header */}
        <div className="grid grid-cols-12 gap-4 text-xs text-gray-400 uppercase tracking-wide mb-2 px-4">
          <div className="col-span-3">Name</div>
          <div className="col-span-2">Assignee</div>
          <div className="col-span-2">Due date</div>
          <div className="col-span-2">Priority</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-1">Comments</div>
        </div>

        {/* Task Rows */}
        {sectionTasks.map((task, index) => (
          <div key={task.id}>
            {/* Drop Indicator */}
            {dragState.isDragging &&
              dragState.dropTarget.section === section.name &&
              dragState.dropTarget.index === index && (
                <div className="h-1 bg-blue-400 rounded mb-2 mx-4"></div>
              )}

            <div
              className="grid grid-cols-12 gap-4 items-center p-4 bg-gray-800 rounded hover:bg-gray-750 cursor-move select-none"
              onMouseDown={(e) => handleMouseDown(e, task)}
              style={{
                position:
                  dragState.isDragging && dragState.dragTask?.id === task.id
                    ? "fixed"
                    : "relative",
                left:
                  dragState.isDragging && dragState.dragTask?.id === task.id
                    ? dragState.mousePosition.x - dragState.dragOffset.x
                    : "auto",
                top:
                  dragState.isDragging && dragState.dragTask?.id === task.id
                    ? dragState.mousePosition.y - dragState.dragOffset.y
                    : "auto",
                zIndex:
                  dragState.isDragging && dragState.dragTask?.id === task.id
                    ? 1000
                    : "auto",
                opacity:
                  dragState.isDragging && dragState.dragTask?.id === task.id
                    ? 0.8
                    : 1,
                transform:
                  dragState.isDragging && dragState.dragTask?.id === task.id
                    ? "rotate(0deg)"
                    : "none",
              }}
            >
              <div className="col-span-3 flex items-center space-x-2">
                <div className="w-4 h-4 border border-gray-500 rounded"></div>
                <span className="text-white">{task.title}</span>
              </div>
              <div className="col-span-2">
                <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
              </div>
              <div className="col-span-2 text-gray-400">-</div>
              <div className="col-span-2 text-gray-400">-</div>
              <div className="col-span-2">
                <span
                  className={`px-2 py-1 ${getStatusColor(
                    task.status
                  )} text-white text-xs rounded`}
                >
                  {task.status}
                </span>
              </div>
              <div className="col-span-1 text-gray-400">-</div>
            </div>
          </div>
        ))}

        {/* Drop Indicator at End */}
        {dragState.isDragging &&
          dragState.dropTarget.section === section.name &&
          dragState.dropTarget.index === sectionTasks.length && (
            <div className="h-1 bg-blue-400 rounded mt-2 mx-4"></div>
          )}
      </div>
    );
  };

  return (
    <div className="flex-1  p-6 min-h-full">
      {/* Drag Overlay */}
      {dragState.isDragging && (
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle 200px at ${dragState.mousePosition.x}px ${dragState.mousePosition.y}px, transparent 0%, transparent 30%, rgba(0,0,0,0.5) 60%)`,
            zIndex: 999,
          }}
        />
      )}

      {sections.map(renderSection)}

      <button className="mt-6 text-blue-400 hover:text-blue-300 text-sm">
        + New status
      </button>
    </div>
  );
}
