import TaskItem from './TaskItem';

// Receive the list of tasks and the handler functions as props
function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <ul className="task-list">
      {/* Conditional Rendering:
        If the tasks array is empty, show a message.
        Otherwise, map over the tasks and render a TaskItem for each.
      */}
      {tasks.length === 0 ? (
        <li className="empty-state">No tasks found.</li>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))
      )}
    </ul>
  );
}

export default TaskList;