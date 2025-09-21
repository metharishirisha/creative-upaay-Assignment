import React from 'react';
import { Search, Filter, Plus } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { setFilters } from '../store/tasksSlice';

interface FilterBarProps {
  onAddTask: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ onAddTask }) => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(state => state.tasks.filters);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
        {/* Search */}
        <div className="flex-1 relative">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search tasks..."
            value={filters.search}
            onChange={(e) => dispatch(setFilters({ search: e.target.value }))}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Filter size={16} />
            <span>Filter by:</span>
          </div>
          
          {/* Category Filter */}
          <select
            value={filters.category}
            onChange={(e) => dispatch(setFilters({ category: e.target.value }))}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          >
            <option value="">All Categories</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="urgent">Urgent</option>
          </select>

          {/* Priority Filter */}
          <select
            value={filters.priority}
            onChange={(e) => dispatch(setFilters({ priority: e.target.value }))}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          >
            <option value="">All Priorities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>

          {/* Add Task Button */}
          <button
            onClick={onAddTask}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <Plus size={16} />
            <span className="hidden sm:inline">Add Task</span>
          </button>
        </div>
      </div>
    </div>
  );
};