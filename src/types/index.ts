export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'done';
  category: 'work' | 'personal' | 'urgent';
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
  createdAt: string;
}

export interface TaskState {
  tasks: Task[];
  filters: {
    category: string;
    priority: string;
    search: string;
  };
}

export interface Column {
  id: string;
  title: string;
  status: Task['status'];
}