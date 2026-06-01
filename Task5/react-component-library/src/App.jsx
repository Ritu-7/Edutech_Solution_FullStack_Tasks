import React, { useState, useEffect } from "react";

const App = () => {
  // ----------------------------------------------------------------
  // 1. State Management
  // ----------------------------------------------------------------
  const [todos, setTodos] = useState(() => {
    // Initialize state from localStorage to persist data across reloads
    const savedTodos = localStorage.getItem("todo_list");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [filter, setFilter] = useState("All");

  // ----------------------------------------------------------------
  // 2. Component Lifecycle (Side Effects)
  // ----------------------------------------------------------------
  // Sync todos to localStorage whenever the 'todos' array changes
  useEffect(() => {
    localStorage.setItem("todo_list", JSON.stringify(todos));
  }, [todos]);

  // ----------------------------------------------------------------
  // 3. Todo Logic Handlers
  // ----------------------------------------------------------------
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    const newTodo = {
      id: Date.now(), // Unique identifier
      text: task,
      priority: priority,
      completed: false,
      createdAt: new Date().toLocaleTimeString(),
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTask(""); // Reset input field
  };

  const handleToggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // ----------------------------------------------------------------
  // 4. Data Filtering & Flow
  // ----------------------------------------------------------------
  const filteredTodos = todos.filter((todo) => {
    if (filter === "Completed") return todo.completed;
    if (filter === "Pending") return !todo.completed;
    return true; // "All"
  });

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Task Matrix</h1>
        <p style={styles.subtitle}>Manage complex data flows & component lifecycles</p>

        {/* Form Input */}
        <form onSubmit={handleAddTodo} style={styles.form}>
          <input
            type="text"
            placeholder="Add a new mission critical task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            style={styles.input}
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            style={styles.select}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <button type="submit" style={styles.button}>Add</button>
        </form>

        {/* Filter Toolbar */}
        <div style={styles.filterContainer}>
          {["All", "Pending", "Completed"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              style={{
                ...styles.filterBtn,
                borderColor: filter === type ? "#00f0ff" : "transparent",
                color: filter === type ? "#00f0ff" : "#888",
              }}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Todo List Render */}
        <div style={styles.listContainer}>
          {filteredTodos.length === 0 ? (
            <p style={styles.emptyText}>No tasks found in this pipeline.</p>
          ) : (
            filteredTodos.map((todo) => (
              <div key={todo.id} style={styles.todoItem}>
                <div style={styles.todoLeft}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleComplete(todo.id)}
                    style={styles.checkbox}
                  />
                  <div style={styles.textGroup}>
                    <span
                      style={{
                        ...styles.todoText,
                        textDecoration: todo.completed ? "line-through" : "none",
                        color: todo.completed ? "#555" : "#fff",
                      }}
                    >
                      {todo.text}
                    </span>
                    <span style={styles.timestamp}>Added at: {todo.createdAt}</span>
                  </div>
                </div>
                <div style={styles.todoRight}>
                  <span
                    style={{
                      ...styles.badge,
                      backgroundColor:
                        todo.priority === "High"
                          ? "#ff005533"
                          : todo.priority === "Medium"
                          ? "#00f0ff33"
                          : "#9d4edd33",
                      color:
                        todo.priority === "High"
                          ? "#ff0055"
                          : todo.priority === "Medium"
                          ? "#00f0ff"
                          : "#9d4edd",
                    }}
                  >
                    {todo.priority}
                  </span>
                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    style={styles.deleteBtn}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

// Cyberpunk-minimalist inline styling
const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#0a0a0c",
    color: "#fff",
    fontFamily: "'Segoe UI', Roboto, sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  card: {
    width: "100%",
    maxWidth: "550px",
    backgroundColor: "#111115",
    border: "1px solid #22222b",
    borderRadius: "12px",
    padding: "30px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "800",
    letterSpacing: "1px",
    margin: "0 0 5px 0",
    background: "linear-gradient(45deg, #00f0ff, #9d4edd)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subtitle: {
    color: "#666",
    fontSize: "0.9rem",
    margin: "0 0 25px 0",
  },
  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 2,
    padding: "12px",
    backgroundColor: "#16161c",
    border: "1px solid #333",
    borderRadius: "6px",
    color: "#fff",
    outline: "none",
  },
  select: {
    flex: 1,
    padding: "12px",
    backgroundColor: "#16161c",
    border: "1px solid #333",
    borderRadius: "6px",
    color: "#fff",
    outline: "none",
    cursor: "pointer",
  },
  button: {
    padding: "12px 20px",
    backgroundColor: "#00f0ff",
    color: "#000",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  filterContainer: {
    display: "flex",
    gap: "15px",
    marginBottom: "20px",
    borderBottom: "1px solid #222",
    paddingBottom: "10px",
  },
  filterBtn: {
    backgroundColor: "transparent",
    border: "1px solid transparent",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "500",
    fontSize: "0.85rem",
    transition: "all 0.2s",
  },
  listContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  todoItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#16161c",
    padding: "14px 18px",
    borderRadius: "8px",
    border: "1px solid #222",
  },
  todoLeft: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  checkbox: {
    width: "18px",
    height: "18px",
    cursor: "pointer",
    accentColor: "#00f0ff",
  },
  textGroup: {
    display: "flex",
    flexDirection: "column",
  },
  todoText: {
    fontSize: "1rem",
    fontWeight: "500",
  },
  timestamp: {
    fontSize: "0.7rem",
    color: "#555",
    marginTop: "2px",
  },
  todoRight: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  badge: {
    fontSize: "0.75rem",
    padding: "4px 8px",
    borderRadius: "4px",
    fontWeight: "600",
    letterSpacing: "0.5px",
  },
  deleteBtn: {
    background: "none",
    border: "none",
    color: "#444",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "color 0.2s",
  },
  emptyText: {
    textAlign: "center",
    color: "#444",
    fontSize: "0.9rem",
    padding: "20px 0",
  },
};

export default App;