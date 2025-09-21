import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';

// Load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('taskDashboardState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error('Error loading state from localStorage:', error);
    return undefined;
  }
};

// Save state to localStorage
const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('taskDashboardState', serializedState);
  } catch (error) {
    console.error('Error saving state to localStorage:', error);
  }
};

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  preloadedState: loadState(),
});

// Save to localStorage whenever store updates
store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;