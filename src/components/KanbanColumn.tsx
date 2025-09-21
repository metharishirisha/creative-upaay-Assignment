import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { TaskCard } from './TaskCard';
import { Task } from '../types';
import { MoreHorizontal, Plus } from 'lucide-react';

interface KanbanColumnProps {
  column: {
    id: string;
    title: string;
    status: Task['status'];
  };
  tasks: Task[];
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: string) => void;
  onAddTask: (status: Task['status']) => void;
}

const statusConfig = {
  'todo': {
    bg: 'bg-slate-50',
    border: 'border-slate-200',
    header: 'bg-slate-100',
    color: 'text-slate-700',
  },
  'in-progress': {
    bg: 'bg-blue-50',
    border: 'border-blue-200', 
    header: 'bg-blue-100',
    color: 'text-blue-700',
  },
  'done': {
    bg: 'bg-green-50',
    border: 'border-green-200',
    header: 'bg-green-100', 
    color: 'text-green-700',
  },
};

export const KanbanColumn: React.FC<KanbanColumnProps> = ({
  column,
  tasks,
  onEditTask,
  onDeleteTask,
  onAddTask,
}) => {
  const config = statusConfig[column.status];

  return (
    <div className={`rounded-xl border-2 ${config.border} ${config.bg} h-fit`}>
      {/* Column Header */}
      <div className={`p-4 ${config.header} rounded-t-xl`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h3 className={`font-bold text-lg ${config.color}`}>
              {column.title}
            </h3>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.color} bg-white`}>
              {tasks.length}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => onAddTask(column.status)}
              className={`p-1 hover:bg-white rounded-full transition-colors ${config.color}`}
            >
              <Plus size={16} />
            </button>
            <button className={`p-1 hover:bg-white rounded-full transition-colors ${config.color}`}>
              <MoreHorizontal size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Tasks Container */}
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`p-4 min-h-[200px] space-y-3 ${
              snapshot.isDraggingOver ? 'bg-blue-100 bg-opacity-50' : ''
            }`}
          >
            {tasks.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-gray-400">
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center mb-3">
                  <Plus size={24} />
                </div>
                <p className="text-sm font-medium">No tasks yet</p>
                <p className="text-xs">Add a task to get started</p>
              </div>
            ) : (
              tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <TaskCard
                        task={task}
                        onEdit={onEditTask}
                        onDelete={onDeleteTask}
                        isDragging={snapshot.isDragging}
                      />
                    </div>
                  )}
                </Draggable>
              ))
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};