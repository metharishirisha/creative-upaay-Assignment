import React, { useState, useMemo } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { addTask, updateTask, deleteTask, moveTask, reorderTasks } from '../store/tasksSlice';
import { Header } from './Header';
import { FilterBar } from './FilterBar';
import { KanbanColumn } from './KanbanColumn';
import { TaskModal } from './TaskModal';
import { Task, Column } from '../types';

const columns: Column[] = [
  { id: 'todo', title: 'To Do', status: 'todo' },
  { id: 'in-progress', title: 'In Progress', status: 'in-progress' },
  { id: 'done', title: 'Done', status: 'done' },
];

export const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const { tasks, filters } = useAppSelector(state => state.tasks);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [newTaskStatus, setNewTaskStatus] = useState<Task['status']>('todo');

  // Filter tasks based on search and filters
  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      const matchesSearch = !filters.search || 
        task.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        task.description.toLowerCase().includes(filters.search.toLowerCase());
      
      const matchesCategory = !filters.category || task.category === filters.category;
      const matchesPriority = !filters.priority || task.priority === filters.priority;
      
      return matchesSearch && matchesCategory && matchesPriority;
    });
  }, [tasks, filters]);

  // Group tasks by status
  const tasksByStatus = useMemo(() => {
    const groups: Record<Task['status'], Task[]> = {
      'todo': [],
      'in-progress': [],
      'done': [],
    };
    
    filteredTasks.forEach(task => {
      groups[task.status].push(task);
    });
    
    return groups;
  }, [filteredTasks]);

  const handleAddTask = (status?: Task['status']) => {
    setNewTaskStatus(status || 'todo');
    setEditingTask(null);
    setIsModalOpen(true);
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleSaveTask = (taskData: Omit<Task, 'id' | 'createdAt'> | Task) => {
    if ('id' in taskData) {
      // Editing existing task
      dispatch(updateTask(taskData as Task));
    } else {
      // Creating new task
      dispatch(addTask({ ...taskData, status: newTaskStatus }));
    }
  };

  const handleDeleteTask = (taskId: string) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      dispatch(deleteTask(taskId));
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const sourceStatus = source.droppableId as Task['status'];
    const destStatus = destination.droppableId as Task['status'];

    // If moving to different column, update task status
    if (sourceStatus !== destStatus) {
      dispatch(moveTask({ taskId: draggableId, newStatus: destStatus }));
    } else {
      // Reordering within same column
      dispatch(reorderTasks({
        sourceIndex: source.index,
        destinationIndex: destination.index,
        status: sourceStatus,
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Project Dashboard</h2>
          <p className="text-gray-600">Manage your tasks and track progress across different stages</p>
        </div>

        <FilterBar onAddTask={() => handleAddTask()} />

        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {columns.map(column => (
              <KanbanColumn
                key={column.id}
                column={column}
                tasks={tasksByStatus[column.status]}
                onEditTask={handleEditTask}
                onDeleteTask={handleDeleteTask}
                onAddTask={handleAddTask}
              />
            ))}
          </div>
        </DragDropContext>

        <TaskModal
          task={editingTask}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditingTask(null);
          }}
          onSave={handleSaveTask}
        />
      </main>
    </div>
  );
};