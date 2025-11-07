function TaskCounter({ completed, total }) {
  return (
    <div className="task-counter">
      <span>
        Showing {total} tasks ({completed} completed)
      </span>
    </div>
  );
}



export default TaskCounter;