import { useState } from 'react';
import './App.css'; // We'll add your CSS here later
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskCounter from './components/TaskCounter';

function App() {
  // State
  // The main list of tasks
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Build Task Manager', completed: false },
    { id: 3, text: 'Submit Assignment', completed: false },
  ]);

  // The current filter being applied ('all', 'active', 'completed')
  const [filter, setFilter] = useState('all');

  // State-Modifying Functions

  // Add a new task
  const addTask = (text) => {
    const newTask = {
      id: crypto.randomUUID(), // Generates a unique ID
      text: text,
      completed: false,
    };
    // Create a new array, NOT modify the old one
    setTasks([...tasks, newTask]);
  };

  // Toggle a task's completed status
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task from the list
  const deleteTask = (id) => {
    // Create a new array that excludes the task with the matching id
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Filtering Logic
  // Calculate the tasks to display based on the current filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') {
      return !task.completed;
    }
    if (filter === 'completed') {
      return task.completed;
    }
    return true; // 'all'
  });

  // Calculated Values
  const completedCount = filteredTasks.filter((task) => task.completed).length;
  const totalCount = filteredTasks.length;

  // Render (JSX)
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>My Task Manager</h1>
      </header>
      
      {/* Pass the addTask function as prop */}
      <TaskForm onAddTask={addTask} />

      <div className="task-controls">
        {/* The counter component */}
        <TaskCounter completed={completedCount} total={totalCount} />
        
        {/* Filter Buttons */}
        <div className="filter-buttons">
          <button
            onClick={() => setFilter('all')}
            className={filter === 'all' ? 'active' : ''}
          >
            All
          </button>
          <button
            onClick={() => setFilter('active')}
            className={filter === 'active' ? 'active' : ''}
          >
            Active
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={filter === 'completed' ? 'active' : ''}
          >
            Completed
          </button>
        </div>
      </div>

      {/* Passing the filtered tasks and the handler functions down */}
      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default App;