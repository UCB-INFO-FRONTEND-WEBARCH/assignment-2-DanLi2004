import { useState } from 'react';

// We receive the 'onAddTask' function from App.jsx via props
function TaskForm({ onAddTask }) {
  // This is *local* state. It only exists inside TaskForm.
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    // Preventing the browser from refreshing the page on form submit
    e.preventDefault();

    // Validation: don't add empty or whitespace-only tasks
    if (text.trim() === '') return;

    // Call the function that was passed down from App.jsx
    onAddTask(text);
    setText('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={text} 
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;