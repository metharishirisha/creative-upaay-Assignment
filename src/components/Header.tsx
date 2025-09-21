import React from 'react';
import { CheckSquare, Bell, Settings, User } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <CheckSquare size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Creative Upaay</h1>
              <p className="text-xs text-gray-500">Task Management Dashboard</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            {/* Settings */}
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
              <Settings size={20} />
            </button>

            {/* User Profile */}
            <div className="flex items-center gap-3">
              <div className="hidden md:block text-right">
                <p className="text-sm font-medium text-gray-900">John Doe</p>
                <p className="text-xs text-gray-500">Project Manager</p>
              </div>
              <div className="p-2 bg-gray-100 rounded-full">
                <User size={20} className="text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};