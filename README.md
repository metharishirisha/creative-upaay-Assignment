# Creative Upaay Task Management Dashboard

A modern, feature-rich task management dashboard built with React.js, Redux Toolkit, and Tailwind CSS. This application provides a Kanban-style interface for managing tasks with drag-and-drop functionality, advanced filtering, and persistent storage.

## 🚀 Features

### Core Functionality
- **Kanban Board**: Three-column layout (To Do, In Progress, Done)
- **Task Management**: Create, edit, delete, and move tasks between columns
- **Drag & Drop**: Intuitive task movement using react-beautiful-dnd
- **Advanced Filtering**: Filter by category, priority, and search terms
- **Persistent Storage**: Tasks automatically saved to localStorage
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### Task Features
- **Priority Levels**: High, Medium, Low with visual indicators
- **Categories**: Work, Personal, Urgent with custom icons
- **Due Dates**: Date tracking with overdue warnings
- **Status Management**: Automatic status updates when moving between columns
- **Rich Descriptions**: Full task descriptions with markdown-like formatting

### UI/UX Features
- **Modern Design**: Clean, professional interface with premium aesthetics
- **Smooth Animations**: Micro-interactions and transitions for enhanced UX
- **Visual Feedback**: Hover states, loading indicators, and status colors
- **Empty States**: Encouraging messages when columns are empty
- **Accessibility**: Keyboard navigation and screen reader support

## 🛠️ Technologies Used

### Frontend Framework
- **React 18.3.1**: Modern React with hooks and functional components
- **TypeScript**: Type-safe development with full IntelliSense support
- **Vite**: Fast build tool and development server

### State Management
- **Redux Toolkit**: Modern Redux with simplified syntax
- **React Redux**: Official React bindings for Redux
- **localStorage**: Browser-based persistence for task data

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide React**: Beautiful, customizable icons
- **react-beautiful-dnd**: Smooth drag-and-drop functionality

### Development Tools
- **ESLint**: Code linting with React-specific rules
- **TypeScript ESLint**: TypeScript-aware linting
- **PostCSS**: CSS processing with Tailwind integration

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   https://github.com/metharishirisha/creative-upaay-Assignment
   cd creative-upaay-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 🎯 Usage Guide

### Adding Tasks
1. Click the "Add Task" button in the filter bar or the "+" icon in any column
2. Fill in the task details:
   - **Title**: Required field for task identification
   - **Description**: Optional detailed description
   - **Status**: Choose the appropriate column (To Do, In Progress, Done)
   - **Category**: Select from Work, Personal, or Urgent
   - **Priority**: Set as High, Medium, or Low
   - **Due Date**: Optional deadline for the task
3. Click "Create Task" to save

### Managing Tasks
- **Edit**: Click on any task card to open the edit modal
- **Delete**: Click the "×" button on the task card
- **Move**: Drag and drop tasks between columns or use the status dropdown in edit mode
- **Filter**: Use the search bar and filter dropdowns to find specific tasks

### Filtering Options
- **Search**: Type keywords to search in task titles and descriptions
- **Category Filter**: Show only Work, Personal, or Urgent tasks
- **Priority Filter**: Filter by High, Medium, or Low priority tasks
- **Combined Filters**: Use multiple filters simultaneously for precise results

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Dashboard.tsx    # Main dashboard container
│   ├── Header.tsx       # Application header with branding
│   ├── FilterBar.tsx    # Search and filter controls
│   ├── KanbanColumn.tsx # Individual column component
│   ├── TaskCard.tsx     # Task display component
│   └── TaskModal.tsx    # Task creation/editing modal
├── store/              # Redux store configuration
│   ├── index.ts        # Store setup with persistence
│   └── tasksSlice.ts   # Task management slice
├── hooks/              # Custom React hooks
│   └── redux.ts        # Typed Redux hooks
├── types/              # TypeScript type definitions
│   └── index.ts        # Application interfaces
├── App.tsx             # Root application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## 🔧 Configuration

### Environment Variables
No environment variables are required for basic functionality. All data is stored locally in the browser.

### Customization Options
- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Task Categories**: Add new categories in `src/types/index.ts`
- **Priority Levels**: Extend priority options in the task interface
- **Columns**: Modify the Kanban columns in `src/components/Dashboard.tsx`

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:
- **Desktop**: Full-featured layout with three-column Kanban board
- **Tablet**: Adapted layout with touch-friendly interactions
- **Mobile**: Single-column view with collapsible sections

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#2563eb) for actions and highlights
- **Success**: Green (#16a34a) for completed tasks
- **Warning**: Yellow (#ca8a04) for medium priority
- **Error**: Red (#dc2626) for high priority and overdue tasks
- **Neutral**: Gray scale for backgrounds and text

### Typography
- **Headings**: Bold, clear hierarchy with proper spacing
- **Body Text**: Readable font sizes with optimal line height
- **Code**: Monospace font for technical elements

## 🚀 Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with default settings

### Manual Deployment
1. Run `npm run build`
2. Upload the contents of the `dist` folder to your web server
3. Configure your server to serve `index.html` for all routes

## 🧪 Testing

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Test Coverage
- Component rendering and interactions
- Redux store actions and reducers
- Task CRUD operations
- Filter functionality
- Drag and drop behavior

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style and conventions
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure responsive design compatibility

## 📝 Known Limitations

- **Offline Support**: Currently requires internet connection for initial load
- **Collaboration**: Single-user application without real-time collaboration
- **File Attachments**: No support for file uploads or attachments
- **Advanced Filtering**: Date range filtering not yet implemented
- **Bulk Operations**: No bulk task operations (select multiple, bulk delete)

## 🔮 Future Enhancements

- [ ] Real-time collaboration with WebSocket integration
- [ ] File attachment support for tasks
- [ ] Advanced date filtering and calendar view
- [ ] Task templates and recurring tasks
- [ ] Team management and user roles
- [ ] Integration with external services (Google Calendar, Slack)
- [ ] Advanced analytics and reporting
- [ ] Dark mode toggle
- [ ] Keyboard shortcuts for power users

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

- GitHub: https://github.com/metharishirisha/creative-upaay-Assignment
- live : https://creative-upaay-assignment-theta.vercel.app/
- video demo : https://www.loom.com/share/a75ba919ac3440fea2904facce524ecd?sid=778aefaa-1cb9-4f58-918a-1a05d01c18f6
- Email: metharishirisha7@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern project management tools
- Icons provided by [Lucide React](https://lucide.dev/)
- Stock photos from [Unsplash](https://unsplash.com/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)

---

**Made with ❤️ by shirisha**
