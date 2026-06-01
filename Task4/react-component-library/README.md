# React Component Library

A modern React component library built with Vite, featuring reusable UI components with a focus on simplicity and customization.

## 📋 Overview

This project demonstrates best practices for creating reusable React components. It includes a collection of well-designed components with props, state management, and styling examples.

## ✨ Features

- **Customizable Button Component** - Multiple variants (primary, secondary, danger) with flexible styling
- **CounterCard Component** - Interactive card component demonstrating state management and component composition
- **Fast Development** - Built with Vite for instant HMR (Hot Module Reloading)
- **Code Quality** - ESLint configured for code consistency and best practices
- **React 19** - Latest React features and capabilities

## 🛠️ Tech Stack

- **React** (v19.2.6) - UI library
- **Vite** (v8.0.12) - Build tool and dev server
- **ESLint** - Code linting and quality assurance
- **Node.js** - Runtime environment

## 📦 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps

1. Navigate to the project directory:
   ```bash
   cd react-component-library
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## 📚 Components

### Button Component

A flexible button component with support for multiple variants and custom handlers.

**Props:**
- `label` (string) - Button text to display
- `onClick` (function) - Click event handler
- `variant` (string, optional) - Button style variant - `'primary'` (default), `'secondary'`, or `'danger'`

**Variants:**
- **Primary** - Blue background (#0070f3), white text - for main actions
- **Secondary** - Light gray background (#eaeaea), dark text - for secondary actions
- **Danger** - Red background (#ff0000), white text - for destructive actions

**Example Usage:**
```jsx
import { Button } from './Button';

<Button 
  label="Click Me" 
  onClick={() => console.log('Clicked!')} 
  variant="primary" 
/>
```

### CounterCard Component

An interactive card component that demonstrates state management, hooks, and component composition with integrated buttons.

**Props:**
- `title` (string) - Card title/heading

**Features:**
- Counter display with increment/decrement buttons
- Reset functionality
- Uses the Button component internally
- Responsive card styling with shadow effects

**Example Usage:**
```jsx
import { CounterCard } from './CounterCard';

<CounterCard title="My Counter" />
```

## 🚀 Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
src/
├── App.jsx           # Main application component
├── Button.jsx        # Button component
├── CounterCard.jsx   # Counter card component
├── main.jsx          # React entry point
├── index.css         # Global styles
└── assets/           # Static assets
```

## 🎨 Styling

Components use inline CSS-in-JS styling for portability and easy customization. Each component includes:
- Base styling for layout and structure
- Theme-based color variants
- Responsive design considerations
- Smooth transitions and hover effects

## 🔍 Code Quality

The project uses ESLint to maintain code quality and consistency. To check your code:

```bash
npm run lint
```

## 📝 Best Practices

- Components are designed as pure, reusable UI elements
- Props are used for customization and flexibility
- State management is handled with React hooks
- Inline styles are organized for maintainability
- Each component has a single responsibility

## 🤝 Contributing

When adding new components:
1. Keep them simple and focused on a single feature
2. Use descriptive prop names
3. Include inline documentation
4. Consider responsive design
5. Follow the existing code style

## 📄 License

This project is part of the EduTech Solution Fullstack Tasks.
