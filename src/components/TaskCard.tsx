import React from 'react';
import { Task } from '../types';
import { Calendar, User, AlertCircle, CheckCircle2, Clock } from 'lucide-react';

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => void;
  isDragging?: boolean;
}

const priorityColors = {
  high: 'bg-red-100 text-red-800 border-red-200',
  medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  low: 'bg-green-100 text-green-800 border-green-200',
};

const categoryIcons = {
  work: User,
  personal: CheckCircle2,
  urgent: AlertCircle,
};

const statusColors = {
  'todo': 'bg-slate-50 border-slate-200',
  'in-progress': 'bg-blue-50 border-blue-200',
  'done': 'bg-green-50 border-green-200',
};

export const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit, onDelete, isDragging }) => {
  const IconComponent = categoryIcons[task.category];
  const isOverdue = new Date(task.dueDate) < new Date() && task.status !== 'done';

  return (
    <div 
      className={`
        p-4 rounded-xl border-2 bg-white shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer
        ${statusColors[task.status]}
        ${isDragging ? 'rotate-3 scale-105 shadow-lg' : ''}
        ${isOverdue ? 'border-red-300 bg-red-50' : ''}
      `}
      onClick={() => onEdit(task)}
    >
      {/* Priority Badge */}
      <div className="flex justify-between items-start mb-3">
        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${priorityColors[task.priority]}`}>
          {task.priority.toUpperCase()}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(task.id);
          }}
          className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-gray-100"
        >
          ✕
        </button>
      </div>

      {/* Task Content */}
      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{task.title}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{task.description}</p>

      {/* Task Meta */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <IconComponent size={16} className="text-gray-500" />
          <span className="text-xs text-gray-500 capitalize">{task.category}</span>
        </div>
        
        <div className="flex items-center gap-1 text-xs text-gray-500">
          {isOverdue && task.status !== 'done' ? (
            <AlertCircle size={14} className="text-red-500" />
          ) : (
            <Calendar size={14} />
          )}
          <span className={isOverdue && task.status !== 'done' ? 'text-red-500 font-medium' : ''}>
            {new Date(task.dueDate).toLocaleDateString()}
          </span>
        </div>
      </div>

      {/* Status Indicator */}
      <div className="mt-3 pt-3 border-t border-gray-100">
        <div className="flex items-center gap-2">
          {task.status === 'done' ? (
            <CheckCircle2 size={16} className="text-green-500" />
          ) : task.status === 'in-progress' ? (
            <Clock size={16} className="text-blue-500" />
          ) : (
            <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
          )}
          <span className="text-xs font-medium text-gray-700 capitalize">
            {task.status.replace('-', ' ')}
          </span>
        </div>
      </div>
    </div>
  );
};