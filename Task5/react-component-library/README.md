# Task Matrix - Advanced React Todo Application

A sophisticated todo application demonstrating advanced React concepts including state management, component lifecycle, data persistence, and complex filtering logic.

## 📋 Overview

**Task Matrix** is an educational React application designed to showcase best practices for managing complex data flows, component lifecycles, and user interactions. It serves as a practical reference for developers learning advanced React patterns.

## ✨ Key Features

- **Task Management** - Create, track, and manage tasks with ease
- **Priority Levels** - Assign tasks as High, Medium, or Low priority
- **Smart Filtering** - Filter tasks by status: All, Pending, or Completed
- **Data Persistence** - Tasks automatically saved to browser localStorage
- **Status Tracking** - Mark tasks as complete or pending with checkboxes
- **Timestamp Recording** - Automatic timestamp capture when tasks are created
- **Interactive UI** - Responsive design with visual priority indicators
- **Hot Module Reloading** - Instant updates during development with Vite

## 🛠️ Tech Stack

- **React** (v19.2.6) - UI library with hooks
- **Vite** (v8.0.12) - Fast build tool and dev server
- **JavaScript (ES6+)** - Modern JavaScript features
- **localStorage API** - Browser data persistence
- **CSS-in-JS** - Inline styling for component encapsulation

## 📦 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Modern web browser with ES6+ support

### Steps

1. Navigate to the project directory:
   ```bash
   cd Task5/react-component-library
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 🚀 Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 📚 Application Features

### Task Creation

Add new tasks with the following information:
- **Task Description** - Text content of the task
- **Priority Level** - Choose from High, Medium, or Low
- **Auto-generated Metadata** - Created timestamp and unique ID

**Example:**
```
Input: "Complete project documentation"
Priority: High
Result: Task created with timestamp and added to list
```

### Task Status Management

- **Check/Uncheck** - Click the checkbox to toggle task completion status
- **Visual Feedback** - Completed tasks show strikethrough text and reduced opacity
- **Persistent State** - Status changes are automatically saved to localStorage

### Advanced Filtering

Filter tasks using the toolbar buttons:
- **All** - Display all tasks (both completed and pending)
- **Pending** - Show only incomplete tasks
- **Completed** - Show only finished tasks

### Priority Indicators

Color-coded priority badges for quick visual reference:
- **High** - Red (#ff0055) - Urgent tasks
- **Medium** - Cyan (#00f0ff) - Standard tasks
- **Low** - Purple (#9d4edd) - Optional tasks

### Data Persistence

Tasks are automatically synchronized with browser localStorage:
- Data persists across browser sessions
- Automatic save on every state change
- Seamless recovery of tasks on page reload

## 🏗️ Architecture & React Concepts

### State Management
```javascript
// Main application state
const [todos, setTodos] = useState(() => {
  // Initialize from localStorage
  const savedTodos = localStorage.getItem("todo_list");
  return savedTodos ? JSON.parse(savedTodos) : [];
});

// Secondary states for UI control
const [task, setTask] = useState("");      // Current input value
const [priority, setPriority] = useState("Medium"); // Selected priority
const [filter, setFilter] = useState("All"); // Current filter
```

### Component Lifecycle (useEffect)
The application uses `useEffect` to synchronize todos with localStorage whenever the todos state changes, ensuring data persistence without manual intervention.

### Event Handling
- **handleAddTodo** - Form submission handler for creating new tasks
- **handleToggleComplete** - Checkbox change handler for status updates
- **handleDeleteTodo** - Delete button handler for removing tasks

### Data Filtering
Tasks are dynamically filtered based on the selected filter type, allowing users to focus on specific task categories.

## 📁 Project Structure

```
src/
├── App.jsx        # Main application component with all logic
├── App.css        # Application styling
├── main.jsx       # React entry point
├── index.css      # Global styles
└── assets/        # Static assets directory
```

## 🎨 Styling Approach

The application uses inline CSS-in-JS styling for:
- **Encapsulation** - Styles are isolated within components
- **Dynamic Styling** - Conditional styles based on state
- **Maintainability** - All styles located with component logic
- **Responsive Design** - Flexible layouts that adapt to different screen sizes

### Key Style Categories
- Container layout and spacing
- Card and form styling
- Button and input elements
- Priority badge indicators
- Filter toolbar buttons
- Todo item list styling

## 💡 Learning Objectives

This project demonstrates:
1. **React Hooks** - useState and useEffect usage
2. **State Management** - Managing complex application state
3. **Side Effects** - Using useEffect for data synchronization
4. **Form Handling** - Capturing and processing user input
5. **Conditional Rendering** - Showing/hiding content based on state
6. **List Rendering** - Efficiently rendering dynamic lists
7. **Event Handling** - Managing click and form events
8. **Data Persistence** - Using localStorage for state persistence
9. **Filter Logic** - Implementing data filtering and sorting
10. **Component Composition** - Organizing code into logical sections

## 🔄 Data Flow

1. **User Input** → Task creation or filter selection
2. **State Update** → React updates the todos or filter state
3. **useEffect Trigger** → Side effect updates localStorage
4. **Re-render** → Component re-renders with new state
5. **UI Update** → Visual changes displayed to user

## 🎯 Example Usage Scenarios

### Adding a Task
1. User types task description in input field
2. Selects priority level from dropdown
3. Clicks "Add" button or presses Enter
4. New task appears in the list with timestamp
5. Data is automatically saved to localStorage

### Filtering Tasks
1. User clicks one of the filter buttons (All, Pending, Completed)
2. List immediately updates to show only matching tasks
3. Filter state is maintained as user interacts

### Completing a Task
1. User clicks checkbox next to task
2. Task is marked as completed
3. Visual styling changes (strikethrough, reduced opacity)
4. Task appears in "Completed" filter view
5. Changes persist in localStorage

## 📝 Best Practices Demonstrated

- **Functional Components** - Modern React approach using functions
- **Hooks Usage** - Proper implementation of useState and useEffect
- **Key Props** - Correct usage of keys in list rendering
- **Immutable State** - Using spread operator and filter for state updates
- **Event Delegation** - Efficient event handling for dynamic content
- **Separation of Concerns** - Clear organization of logic sections
- **Comments** - Well-documented code sections

## 🐛 Troubleshooting

### Tasks Not Persisting
- Check browser console for localStorage errors
- Verify browser supports localStorage
- Clear browser cache and reload

### Application Not Starting
- Ensure all dependencies are installed: `npm install`
- Check Node.js version is v14 or higher
- Verify port 5173 is available

### Styling Issues
- Clear browser cache (Ctrl+Shift+Delete)
- Restart development server
- Check CSS-in-JS styles in App.jsx

## 📄 License

This project is part of the EduTech Solution Fullstack Tasks.
