import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TaskState } from '../types';

const initialState: TaskState = {
  tasks: [
    {
      id: '1',
      title: 'Design System Implementation',
      description: 'Create a comprehensive design system for the project',
      status: 'todo',
      category: 'work',
      priority: 'high',
      dueDate: '2025-01-30',
      createdAt: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'API Integration',
      description: 'Integrate REST APIs for data fetching',
      status: 'in-progress',
      category: 'work',
      priority: 'medium',
      dueDate: '2025-01-25',
      createdAt: new Date().toISOString(),
    },
    {
      id: '3',
      title: 'Testing Implementation',
      description: 'Write unit and integration tests',
      status: 'done',
      category: 'work',
      priority: 'medium',
      dueDate: '2025-01-20',
      createdAt: new Date().toISOString(),
    },
  ],
  filters: {
    category: '',
    priority: '',
    search: '',
  },
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Omit<Task, 'id' | 'createdAt'>>) => {
      const newTask: Task = {
        ...action.payload,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
      };
      state.tasks.push(newTask);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    moveTask: (state, action: PayloadAction<{ taskId: string; newStatus: Task['status'] }>) => {
      const { taskId, newStatus } = action.payload;
      const task = state.tasks.find(task => task.id === taskId);
      if (task) {
        task.status = newStatus;
      }
    },
    setFilters: (state, action: PayloadAction<Partial<TaskState['filters']>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    reorderTasks: (state, action: PayloadAction<{ sourceIndex: number; destinationIndex: number; status: Task['status'] }>) => {
      const { sourceIndex, destinationIndex, status } = action.payload;
      const statusTasks = state.tasks.filter(task => task.status === status);
      const [removed] = statusTasks.splice(sourceIndex, 1);
      statusTasks.splice(destinationIndex, 0, removed);
      
      // Update the state with reordered tasks
      const otherTasks = state.tasks.filter(task => task.status !== status);
      state.tasks = [...otherTasks, ...statusTasks];
    },
  },
});

export const { addTask, updateTask, deleteTask, moveTask, setFilters, reorderTasks } = tasksSlice.actions;
export default tasksSlice.reducer;